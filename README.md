# Healthcare AI Platform

A comprehensive AI-driven healthcare management and predictive platform.

## Features & Modules

- **Patient Waiting Time Prediction**: Regressive analysis of hospital flow.
- **Hospital Demand Forecasting**: Time-series resource planning.
- **Readmission Prediction**: Risk assessment for patient discharge.
- **Disease-Risk Modeling**: Clinical risk scoring.
- **Medical Imaging (MONAI)**: Radiology and pathology analysis.
- **NLP (Hugging Face/Spacy)**: Laboratory result parsing and fraud detection.
- **Inventory Management**: Pharmacy stock forecasting.
- **Real-time Alerts**: Deterioration alerts using imaging and vital trends.

## Tech Stack

- **Languages**: Python
- **Database**: PostgreSQL (Postgres DB)
- **Analytics**: Pandas, NumPy, Scipy, Statsmodels, Scikit-learn
- **Visualization**: Matplotlib, Seaborn, Plotly
- **Deep Learning**: PyTorch, MONAI (Medical AI), OpenCV
- **NLP**: Hugging Face, Spacy
- **Backend**: FastAPI (Serving), Django + DRF (Management)
- **Task Queue**: Celery + Redis
- **MLOps**: MLflow
- **DevOps**: Docker + AWS (ready)

## Installation & Usage

### 1. Using Docker (Recommended)
```bash
docker-compose up --build
```
This starts the entire ecosystem:
- **FastAPI AI Service**: `http://localhost:8001`
- **Django Management**: `http://localhost:8000`
- **MLflow Tracking**: `http://localhost:5000`
- **Postgres DB**: `localhost:5432`

### 2. Local Setup
```bash
python -m venv venv
source venv/bin/activate  # or .\venv\Scripts\activate on Windows
pip install -r requirements.txt
```

## Project Structure
- `ai_service/`: FastAPI application containing all ML/AI models.
- `backend/`: Django project for patient data and administration.
- `docker/`: Deployment configuration files.
- `mlflow/`: Tracking server for model experiments.
