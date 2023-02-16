function getSettings(){

    var folderNameTest = DriveApp.getFolderById(SETTINGS.siteFolderId);
    SETTINGS.folderName = folderNameTest.getName();
    
    return SETTINGS;
}