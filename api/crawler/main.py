import requests
from bs4 import BeautifulSoup
import json
import datetime
import time
import os

# Configuration
WEBHOOK_URL = 'http://localhost:3000/api/v1/internal/news'
API_KEY = os.environ.get('INTERNAL_API_KEY', 'my-super-secret-key')
# Target URL (Example: investing.com economic calendar or similar)
TARGET_URL = 'https://example-economic-calendar.com/calendar'

def fetch_economic_data():
    print(f"Fetching data from {TARGET_URL}...")
    # headers = {'User-Agent': 'Mozilla/5.0 ...'}
    # response = requests.get(TARGET_URL, headers=headers)
    # soup = BeautifulSoup(response.text, 'html.parser')
    
    # --- MOCK DATA FOR DEMONSTRATION ---
    # In a real scenario, you would parse the 'soup' object to extract these fields.
    print("Parsing HTML...")
    mock_events = [
        {
            "title": "US Core CPI (MoM)",
            "eventTime": datetime.datetime.now().isoformat() + "Z", # Happened right now for testing
            "country": "USA",
            "impact": "HIGH",
            "effectLevel": 3,
            "affectedPairs": ["EUR/USD", "XAU/USD"],
            "status": "UPCOMING",
            "source": TARGET_URL
        },
        {
            "title": "ECB Press Conference",
            "eventTime": (datetime.datetime.now() + datetime.timedelta(days=1)).isoformat() + "Z",
            "country": "EUR",
            "impact": "HIGH",
            "effectLevel": 3,
            "affectedPairs": ["EUR/USD", "EUR/GBP"],
            "status": "UPCOMING",
            "source": TARGET_URL
        }
    ]
    
    return mock_events

def send_to_webhook(event):
    headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    }
    
    print(f"Sending event '{event['title']}' to Webhook...")
    try:
        response = requests.post(WEBHOOK_URL, headers=headers, json=event)
        
        if response.status_code in [200, 201]:
            print(f"[SUCCESS] Event saved/updated: {event['title']}")
        else:
            print(f"[ERROR] Failed to save event. Status: {response.status_code}, Response: {response.text}")
    except Exception as e:
        print(f"[ERROR] Could not connect to Webhook: {e}")

def run_crawler():
    print("--- Crawler Started ---")
    events = fetch_economic_data()
    
    for event in events:
        send_to_webhook(event)
        time.sleep(1) # Small delay to be polite to our own API
        
    print("--- Crawler Finished ---")

if __name__ == '__main__':
    run_crawler()
