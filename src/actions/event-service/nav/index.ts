export async function getEventNavData() {
  const url = `${process.env.API_BASE_URL}/event`
  const res = await fetch(url, {
    method: 'GET',
    next: {
      tags: ['event-nav'],
      revalidate: 360000,
    },
  })

  // 디버깅용 로그 출력
  console.log("📡 Fetching:", url)
  console.log("📡 Status:", res.status)

  if (!res.ok) {
    const text = await res.text()
    console.error("❌ Fetch failed:", {
      status: res.status,
      statusText: res.statusText,
      url,
      body: text,
    })

    throw new Error('네비게이션 데이터를 불러오는 데 실패')
  }

  return res.json()
}
