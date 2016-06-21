jQuery(document).ready(function() {
    jQuery('#fullpage').fullpage({
        //Navigation
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
        sectionsColor: ['#7F6542','#FFCA84','#FFEBD1', '#7F6645'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['First page', 'Second page', 'Third page', 'last page']
    });
});
