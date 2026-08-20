from django.db import models

class Patient(models.Model):
    patient_id = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    dob = models.DateField()
    gender = models.CharField(max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Encounter(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    encounter_time = models.DateTimeField()
    waiting_time_minutes = models.IntegerField(null=True, blank=True)
    department = models.CharField(max_length=100)
    complaint = models.TextField()
    is_emergency = models.BooleanField(default=False)

class LabResult(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    test_name = models.CharField(max_length=100)
    result_value = models.FloatField()
    result_unit = models.CharField(max_length=20)
    timestamp = models.DateTimeField()
    is_abnormal = models.BooleanField(default=False)

class PharmacyInventory(models.Model):
    medication_name = models.CharField(max_length=255)
    stock_level = models.IntegerField()
    reorder_level = models.IntegerField()
    last_updated = models.DateTimeField(auto_now=True)

class Prediction(models.Model):
    PREDICTION_TYPES = [
        ('wait_time', 'Wait Time'),
        ('readmission', 'Readmission Risk'),
        ('disease_risk', 'Disease Risk'),
        ('demand', 'Demand Forecast'),
    ]
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True, blank=True)
    prediction_type = models.CharField(max_length=50, choices=PREDICTION_TYPES)
    value = models.JSONField()
    timestamp = models.DateTimeField(auto_now_add=True)
    model_version = models.CharField(max_length=50)
