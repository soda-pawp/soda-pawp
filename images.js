// ★ Soda Pawp image list ★
// Paste each Google Drive FILE ID here (right-click file → Share → copy link → the bit between /d/ and /view).
// These photos auto-fill the Home, Gallery, and Shop grids.
window.SODA_IMAGES = [
  '1Fw8272D9Rp7u7XoklP0Gc6YzE3IEZ8U9',
  '1VeCYGpZDs0bQPS1GvP_DWx7tiQoSWkLu',
  '1pGddV_qBCjqDl3qPdSse4vfP38cu7BHS',
  '1P8AXI6a-_jxTgZbq_fQvjYzX1S8CGq7Y',
  '1tnQ5qiHyZyoy2g3p7zmuGhawKl7HOCjb',
  '1Nf5V_Lw273c8Q76nydtBHLFZIeqgKdS1',
  '1lGgT4pDJdQ1IXsdc43hLW14_NZ80tzLH',
  '1lCoq3Z3RXPoAVEL8Ii0LK1mZQUITSmUo',
  '1TccC4xf-IW0G25NeOW7QXvC7P9Hj5kC7',
  '1wbUaSZK2WJMv8r3fHQ217optpF_TnlqF',
  '14H7INA88B1ZfJt29zcEukSjVDOR6Ynow',
  '12iWD4xhK43XJKOXsHAkf8pguJyikH9F5',
  '1jqQY62Oi_NJ4t28jOxPSVvRiuWqMLSx1'
];
// Primary = Google's image CDN (most reliable for embedding); falls back to the thumbnail endpoint, then the illustration.
window.driveUrl = id => `https://lh3.googleusercontent.com/d/${id}=w700`;
window.driveAlt = id => `https://drive.google.com/thumbnail?id=${id}&sz=w700`;
window.driveErr = function(img){
  var id = img.getAttribute('data-fid');
  if(id && !img.dataset.tried){ img.dataset.tried='1'; img.src = window.driveAlt(id); }
  else { img.remove(); }
};
