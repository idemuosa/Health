import pandas as pd
import numpy as np
from typing import Dict
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import mlflow
import mlflow.sklearn

class WaitTimeModel:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100)

    def preprocess(self, data: pd.DataFrame):
        # Feature engineering: hour of day, day of week, department encoding
        data['hour'] = pd.to_datetime(data['encounter_time']).dt.hour
        data['day_of_week'] = pd.to_datetime(data['encounter_time']).dt.dayofweek

        # Simple one-hot for department if it was there
        features = data[['hour', 'day_of_week', 'is_emergency']]
        target = data['waiting_time_minutes']
        return features, target

    def train(self, data: pd.DataFrame):
        with mlflow.start_run(run_name="WaitTimePrediction"):
            X, y = self.preprocess(data)
            X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

            self.model.fit(X_train, y_train)
            predictions = self.model.predict(X_test)
            mae = mean_absolute_error(y_test, predictions)

            mlflow.log_metric("mae", mae)
            mlflow.sklearn.log_model(self.model, "model")

            return mae

    def predict(self, input_features: Dict):
        # input_features: {'hour': 10, 'day_of_week': 1, 'is_emergency': True}
        df = pd.DataFrame([input_features])
        return self.model.predict(df)[0]
