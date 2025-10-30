export default async function handler(req, res) {
  const body = await req.json();
  const prompt = body.prompt;
  const apiToken = "r8_bzMz1mcT6tjCqzoZX6nqA1b49hgJUoa1NIadk"; 

  const response = await fetch("https://api.replicate.com/v1/predictions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Token ${apiToken}`
    },
    body: JSON.stringify({
      version: "13b576ee37e8bce5448d8e71c3c2f6f875f04e04b58e37b7b8f60edbcaecf26b",
      input: { prompt }
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
