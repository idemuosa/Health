from celery import shared_task
import time

@shared_task
def retrain_all_models():
    print("Starting retraining of all models...")
    # In a real app, this would call the ai_service to trigger training
    time.sleep(10)
    print("Models retrained successfully.")

@shared_task
def process_batch_imaging(image_folder):
    print(f"Processing batch imaging for folder: {image_folder}")
    time.sleep(5)
    return "Batch processing complete"
