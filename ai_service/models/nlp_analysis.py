import spacy
from transformers import pipeline

class HealthNLP:
    def __init__(self):
        # Load a medical English model if possible, otherwise blank/en_core_web_sm
        try:
            self.nlp = spacy.load("en_core_web_sm")
        except:
            self.nlp = spacy.blank("en")

        # Fraud detection pipeline using a pre-trained sequence classifier
        self.fraud_classifier = pipeline("text-classification", model="distilbert-base-uncased-finetuned-sst-2-english")

    def parse_lab_report(self, text: str):
        doc = self.nlp(text)
        entities = [{"text": ent.text, "label": ent.label_} for ent in doc.ents]
        return entities

    def detect_fraud(self, billing_notes: str):
        # Placeholder for anomaly detection in billing
        result = self.fraud_classifier(billing_notes)
        return result
