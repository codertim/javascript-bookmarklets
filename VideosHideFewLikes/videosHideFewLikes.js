

var comments = document.evaluate("//span[@id='vote-count-middle'][number(normalize-space())<10]/ancestor::ytd-comment-thread-renderer", document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)

for (var i=0; i < comments.snapshotLength; i++) { 
    comments.snapshotItem(i).style.opacity = '0.3';
}


