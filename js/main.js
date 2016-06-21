jQuery(document).ready(function() {
    jQuery('#fullpage').fullpage({
    	paddingTop: '3em',
        paddingBottom: '10px',
        //Navigation
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        sectionsColor: ['#272727','#FFCA84','#FFEBD1', '#7F6645'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third page', 'last page']
        
    });
});
