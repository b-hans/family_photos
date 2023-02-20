function getPhotos(albumName) {

    var params = {};

    var folder = DriveApp.getFolderById(SETTINGS.siteFolderId);

    var albums = folder.getFoldersByName(albumName);

    if (!albums.hasNext()){
        params.errorMessage = "No album by that name";
        return params;
    }

    var album = albums.next();

    var images = album.getFiles();

    var imageArray = Array();

    while (images.hasNext()){
        var image = images.next();
        imageArray.push(image.getId());
    }

    params.imageArray = imageArray;
    params.tester = folder.getName();

    return params;
}