export async function getQuote() {
  try {
    let response = await fetch(`https://type.fit/api/quotes`);
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
    } catch(error) {
      return false;
    }
}