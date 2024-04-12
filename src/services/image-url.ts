export const getCroppedImageUrl = (url:string, width:number, height:number) => {
    const urlArr = url.split('media/');
    let NewImageLink : string = urlArr[0] +'media/' + 'crop/'+width+'/'+height+'/' + urlArr[1];
    return NewImageLink;
}