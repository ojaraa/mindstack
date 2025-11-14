export const getAssetUrl = (asset: any): string => {
  if (asset && typeof asset === 'object' && 'fields' in asset) {
    return asset.fields?.file?.url ? `https:${asset.fields.file.url}` : '';
  }
  return '';
};

export const getAssetTitle = (asset: any): string => {
  if (asset && typeof asset === 'object' && 'fields' in asset) {
    return asset.fields?.title || '';
  }
  return '';
};