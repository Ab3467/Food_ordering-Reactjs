async function sendHttpsRequest(url, confing) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("something went wrong");
  }
}

export default function UseHttp() {
  return <div></div>;
}
