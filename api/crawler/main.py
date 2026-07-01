import requests
import feedparser
import datetime
import time
import os

# Configuration
WEBHOOK_URL = 'http://localhost:3000/api/v1/internal/news'
API_KEY = os.environ.get('INTERNAL_API_KEY', 'my-super-secret-key')

# We'll use actual Live RSS feeds for Forex and Crypto!
RSS_FEEDS = [
    # --- Top 10 Crypto News RSS Feeds ---
    {"url": "https://cointelegraph.com/rss", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://www.coindesk.com/arc/outboundfeeds/rss/", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://cryptoslate.com/feed/", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://www.newsbtc.com/feed/", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://news.bitcoin.com/feed/", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://cryptopotato.com/feed/", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://beincrypto.com/feed/", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://decrypt.co/feed", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://ambcrypto.com/feed/", "category": "CRYPTO", "country": "GLOBAL"},
    {"url": "https://zycrypto.com/feed/", "category": "CRYPTO", "country": "GLOBAL"},

    # --- Top 10 Forex News RSS Feeds ---
    {"url": "https://www.dailyfx.com/feeds/market-news", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.fxstreet.com/news/feed", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.forexlive.com/feed/news", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.investing.com/rss/news_1.rss", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.actionforex.com/feed/", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.babypips.com/feed/", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.earnforex.com/news/feed/", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://forextv.com/feed/", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.forexcrunch.com/feed/", "category": "FOREX", "country": "GLOBAL"},
    {"url": "https://www.financemagnates.com/forex/feed/", "category": "FOREX", "country": "GLOBAL"}
]

def fetch_live_news():
    live_events = []
    
    for feed_info in RSS_FEEDS:
        print(f"\nFetching live RSS feed from {feed_info['url']}...")
        feed = feedparser.parse(feed_info['url'])
        
        # Take the top 5 latest news from each feed
        for entry in feed.entries[:5]:
            # Convert published time to ISO UTC
            try:
                # published_parsed is a struct_time tuple provided by feedparser
                published_dt = datetime.datetime.fromtimestamp(time.mktime(entry.published_parsed), tz=datetime.timezone.utc)
                event_time = published_dt.isoformat().replace('+00:00', 'Z')
            except Exception as e:
                # Fallback to current UTC time if parsing fails
                event_time = datetime.datetime.now(datetime.timezone.utc).isoformat().replace('+00:00', 'Z')
            
            # Map Live RSS data to our Database Schema Payload
            live_events.append({
                "title": entry.title,
                "eventTime": event_time,
                "country": feed_info["country"],
                "category": feed_info["category"],
                "impact": "MEDIUM", # Defaulting to MEDIUM for general market news
                "effectLevel": 2,
                "affectedPairs": [],
                "status": "RELEASED", # News articles are already released/published
                "source": entry.link
            })
            
    return live_events

def send_to_webhook(event):
    headers = {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY
    }
    
    print(f"Sending event '{event['title'][:40]}...' to Webhook...")
    try:
        response = requests.post(WEBHOOK_URL, headers=headers, json=event)
        
        if response.status_code in [200, 201]:
            print(f"  [SUCCESS] Saved/Updated in DB!")
        else:
            print(f"  [ERROR] Failed to save. Status: {response.status_code}, Response: {response.text}")
    except Exception as e:
        print(f"  [ERROR] Could not connect to Webhook: {e}")

def run_crawler():
    print("--- Live RSS Crawler Started ---")
    events = fetch_live_news()
    
    print("\n--- Pushing to NestJS Database ---")
    for event in events:
        send_to_webhook(event)
        time.sleep(1) # Small delay to be polite to our own API
        
    print("--- Crawler Finished ---")

if __name__ == '__main__':
    run_crawler()
