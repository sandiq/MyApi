
CECAN_API = [
    {
        name: 'Cecan Chindo',
        params: 'apikey',
        url: '/api/cecan/china?apikey='
    },
    {
        name: 'Cecan Vietnam',
        params: 'apikey',
        url: '/api/cecan/vietnam?apikey='
    },
    {
        name: 'Cecan Thailand',
        params: 'apikey',
        url: '/api/cecan/thailand?apikey='
    },
    {
        name: 'Cecan Indonesia',
        params: 'apikey',
        url: '/api/cecan/indonesia?apikey='
    },
    {
        name: 'Cecan Korea',
        params: 'apikey',
        url: '/cecan/korea?apikey='
    },
    {
        name: 'Cecan Japan',
        params: 'apikey',
        url: '/api/cecan/japan?apikey='
    },
    {
        name: 'Cecan Malaysia',
        params: 'apikey',
        url: '/api/cecan/malaysia?apikey='
    }
];
DOWNLOADS_API = [
    {
        name: 'Downloader Facebook',
        params: 'url & apikey',
        url: '/api/download/facebook?url=https://www.facebook.com/share/r/9AnbH7Z4HZc8B4pv/?mibextid=D5vuiz&apikey='
    },
    {
        name: 'Downloader Instagram',
        params: 'url & apikey',
        url: '/api/download/instagram?url=https://www.instagram.com/reel/C09rbXGR55u/?igsh=MWxoaGYybHk4YTl2Mw==&apikey='
    },
    {
        name: 'Downloader Pinterest',
        params: 'q & apikey',
        url: '/api/download/pinterest?q=naruto&apikey='
    },
    {
        name: 'Downloader Tiktok',
        params: 'url & apikey',
        url: '/api/download/tiktok?url=https://vt.tiktok.com/ZSFX4JwbM/&apikey='
    },
    {
        name: 'Downloader YTMP3',
        params: 'url & apikey',
        url: '/api/download/ytmp3?url=https://youtu.be/5z7_m0JJxTY?si=ZIgaDGpOihZyO1Rn&apikey='
    },
    {
        name: 'Downloader YTMP4',
        params: 'url & apikey',
        url: '/api/download/ytmp4?url=https://youtu.be/5z7_m0JJxTY?si=ZIgaDGpOihZyO1Rn&apikey='
    }
];

module.exports = { CECAN_API, DOWNLOADS_API };