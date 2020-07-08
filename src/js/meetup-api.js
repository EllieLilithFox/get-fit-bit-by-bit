export async function getActive() {
  try {
    let response = await fetch(`http://api.amp.active.com/v2/search?query=running&category=event&start_date=2020-07-08..&near=Seattle&radius=50&api_key=dvbyn4dvkkbbvf6pywfag4k8`);
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