export const saveSVG = () => {
  const svgData = document.getElementsByTagName('svg')[0];
  //get svg source.
  const serializer = new XMLSerializer();
  let source = serializer.serializeToString(svgData);
  //add name spaces.
  if (!source.match(/^<svg[^>]+xmlns="http:\/\/www\.w3\.org\/2000\/svg"/)) {
    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
  }
  if (!source.match(/^<svg[^>]+"http:\/\/www\.w3\.org\/1999\/xlink"/)) {
    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    //add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
    //convert svg source to URI data scheme.
  }
  const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
  let downloadLink = document.createElement("a");
  downloadLink.href = url;
  downloadLink.download = "ShortURL.svg";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}
