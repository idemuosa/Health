import pandas as pd
from statsmodels.tsa.holtwinters import ExponentialSmoothing
import mlflow

class DemandForecastModel:
    def __init__(self):
        self.model = None

    def train(self, series: pd.Series):
        # series: date-indexed count of encounters
        with mlflow.start_run(run_name="DemandForecasting"):
            self.model = ExponentialSmoothing(series, seasonal='add', seasonal_periods=7).fit()
            mlflow.log_param("seasonal_periods", 7)
            # In a real scenario, we'd log the model or save it
            return self.model

    def forecast(self, steps: int):
        if self.model:
            return self.model.forecast(steps)
        return None
