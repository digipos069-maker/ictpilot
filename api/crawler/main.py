import requests
from bs4 import BeautifulSoup
import json
import datetime
import time
import os

# Configuration
WEBHOOK_URL = 'http://localhost:3000/api/v1/internal/news'
API_KEY = os.environ.get('INTERNAL_API_KEY', 'my-super-secret-key')
# Top 5 Forex News Sources
FOREX_SOURCES = [
    'https://www.forexfactory.com/calendar',
    'https://www.investing.com/economic-calendar/',
    'https://www.dailyfx.com/economic-calendar',
    'https://www.fxstreet.com/economic-calendar',
    'https://www.myfxbook.com/forex-economic-calendar'
]

# Top 5 Crypto News Sources
CRYPTO_SOURCES = [
    'https://www.coindesk.com/',
    'https://cointelegraph.com/',
    'https://cryptoslate.com/',
    'https://decrypt.co/',
    'https://www.theblock.co/'
]

ALL_SOURCES = FOREX_SOURCES + CRYPTO_SOURCES

def fetch_economic_data():
    mock_events = []
    
    for source in ALL_SOURCES:
        print(f"Fetching data from {source}...")
        # headers = {'User-Agent': 'Mozilla/5.0 ...'}
        # response = requests.get(source, headers=headers)
        # soup = BeautifulSoup(response.text, 'html.parser')
        # ... your custom parsing logic per site goes here ...
        
        # We assign the source string directly into the mock events below
    
    print("Parsing HTML...")
    mock_events = [
        {
            "title": "US Non-Farm Payrolls (NFP)",
            "eventTime": datetime.datetime.now().isoformat() + "Z",
            "country": "USA",
            "impact": "HIGH",
            "effectLevel": 3,
            "affectedPairs": ["EUR/USD", "USD/JPY", "GBP/USD"],
            "status": "UPCOMING",
            "source": FOREX_SOURCES[0]
        },
        {
            "title": "Fed Interest Rate Decision",
            "eventTime": (datetime.datetime.now() + datetime.timedelta(hours=2)).isoformat() + "Z",
            "country": "USA",
            "impact": "HIGH",
            "effectLevel": 3,
            "affectedPairs": ["BTC/USD", "EUR/USD", "XAU/USD"],
            "status": "UPCOMING",
            "source": FOREX_SOURCES[1]
        },
        {
            "title": "SEC Bitcoin ETF Regulatory Decision",
            "eventTime": (datetime.datetime.now() + datetime.timedelta(days=1)).isoformat() + "Z",
            "country": "USA",
            "impact": "HIGH",
            "effectLevel": 3,
            "affectedPairs": ["BTC/USD", "ETH/USD"],
            "status": "UPCOMING",
            "source": CRYPTO_SOURCES[0]
        },
        {
            "title": "ECB Monetary Policy Statement",
            "eventTime": (datetime.datetime.now() + datetime.timedelta(days=2)).isoformat() + "Z",
            "country": "EUR",
            "impact": "HIGH",
            "effectLevel": 3,
            "affectedPairs": ["EUR/USD", "EUR/GBP", "EUR/JPY"],
            "status": "UPCOMING",
            "source": FOREX_SOURCES[2]
        },
        {
            "title": "Ethereum Dencun Network Upgrade",
            "eventTime": (datetime.datetime.now() + datetime.timedelta(days=3)).isoformat() + "Z",
            "country": "GLOBAL",
            "impact": "HIGH",
            "effectLevel": 2,
            "affectedPairs": ["ETH/USD", "ETH/BTC"],
            "status": "UPCOMING",
            "source": CRYPTO_SOURCES[1]
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
