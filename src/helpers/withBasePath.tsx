import assetPaths from "@/const/assetPaths";

const withBasePath = (src: string) :string => `${assetPaths.imageBase}${src}`

export default withBasePath