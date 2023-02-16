const options = {
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQwMTRlZWVmLTFjZjUtNDg3My1hYmZkLWFiY2ZjNTZkZmM0OCIsInVzZXJuYW1lIjoiYWRhbWIxMkBvdXRsb29rLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJHdJTnoxOTAyclBEbUhKUHRMdUtEMS5nRDIuYU55UGY3bS55UE9qd3hkeFQyVE9Dc1d1TWh1IiwiaWF0IjoxNjc2NTY1Mjc4LCJleHAiOjE2NzY1Njg4Nzh9.2q2w0lc7Sh03O-4Kz2FdgjvMSMpu5lN-6PNrlxi1siw'
  }
}

export const fetchData = async (url: string) => {
  const res = await fetch(url, options)
  const result = res.json()
  return result
}
