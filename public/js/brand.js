document.addEventListener('scroll', function() {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var bigImg = document.getElementById('bigImg');
  var smallImg = document.getElementById('smallImg');
  var brand = document.getElementById('brand');

  // 如果滚动到一定程度，显示小图，隐藏大图
  if (scrollTop > 50) {
      bigImg.style.display = 'none';
      smallImg.style.display = 'flex';
      brand.style.display = 'flex';
  } else {
      // 否则，显示大图，隐藏小图
      bigImg.style.display = 'flex';
      smallImg.style.display = 'none';
      brand.style.display = 'none';
  }
});

// 在页面加载时初始化状态
document.addEventListener('DOMContentLoaded', function() {
  var bigImg = document.getElementById('bigImg');
  var smallImg = document.getElementById('smallImg');
  var brand = document.getElementById('brand');

  bigImg.style.display = 'flex';
  smallImg.style.display = 'none';
  brand.style.display = 'none';
});
