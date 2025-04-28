import pandas as pd
from urllib.parse import urlparse

def extract_domain(url):
    try:
        parsed_url = urlparse(url)
        return f"{parsed_url.scheme}://{parsed_url.netloc}"
    except Exception:
        return None

def filter_different_domains(csv_path, url_column='thumbnail_url', base_domain='https://sitem.ssgcdn.com'):
    # CSV 읽기
    df = pd.read_csv(csv_path)

    # 도메인 추출
    df['domain'] = df[url_column].apply(extract_domain)

    # 기준 도메인과 다른 URL 필터링
    filtered_df = df[df['domain'] != base_domain]

    # 중복 제거 (thumbnail_url 기준)
    filtered_df = filtered_df.drop_duplicates(subset=[url_column])

    # 저장
    filtered_df.to_csv('output_filtered_urls.csv', index=False)
    print(f"✅ 도메인이 다른 고유 URL {len(filtered_df)}건 저장 완료 → output_filtered_urls.csv")

# 실행
filter_different_domains('product_thumbnail_202504231549.csv')
