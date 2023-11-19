import Soup from "gi://Soup";

export const getFeed = () => {
  const NALUG_ENDPOINT_RSS =
    "https://www.toptal.com/developers/feed2json/convert?url=https://www.nalug.tech/feed/";

  let session = new Soup.Session();

  const message = Soup.Message.new("GET", NALUG_ENDPOINT_RSS);

  const ByteArray = imports.byteArray;

  let data = ByteArray.toString(
    session.send_and_read(message, null).get_data()
  );
  return JSON.parse(data);
};
