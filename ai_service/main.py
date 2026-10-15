from fastapi import FastAPI, HTTPException
from typing import Dict, List
from ai_service.models.wait_time import WaitTimeModel
from ai_service.models.demand_forecast import DemandForecastModel
from ai_service.models.medical_imaging import MedicalImagingAI
from ai_service.models.nlp_analysis import HealthNLP

import mlflow
import os

app = FastAPI(title="Health AI Serving Service")

# Initialize MLflow
MLFLOW_URI = os.environ.get("MLFLOW_TRACKING_URI", "http://mlflow:5000")
mlflow.set_tracking_uri(MLFLOW_URI)
try:
    mlflow.set_experiment("Healthcare_AI_Platform")
except:
    pass

# Initialize models
wait_time_model = WaitTimeModel()
demand_model = DemandForecastModel()
imaging_ai = MedicalImagingAI()
nlp_ai = HealthNLP()

@app.get("/")
def read_root():
    return {"message": "Welcome to the Health AI Platform Serving API"}

@app.post("/predict/wait-time")
def predict_wait_time(data: Dict):
    try:
        prediction = wait_time_model.predict(data)
        return {"predicted_wait_time": prediction}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/analyze/lab-report")
def analyze_lab_report(text: str):
    entities = nlp_ai.parse_lab_report(text)
    return {"entities": entities}

@app.post("/analyze/imaging")
def analyze_imaging(image_path: str):
    result = imaging_ai.predict(image_path)
    return result

@app.post("/detect/fraud")
def detect_fraud(notes: str):
    result = nlp_ai.detect_fraud(notes)
    return {"fraud_analysis": result}

@app.get("/health")
def health_check():
    return {"status": "healthy"}
