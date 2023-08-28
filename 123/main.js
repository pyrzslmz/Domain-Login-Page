const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const adInput = document.getElementById('kuna');
    const soyadInput = document.getElementById('pas');
    
    const ad = adInput.value.trim();
    const soyad = soyadInput.value.trim();
    
    if (!ad || !soyad) {
      showAlert('Lütfen tüm alanları doldurun.');
    } else {
      window.location.href = 'https://www.youtube.com/shorts/uEVYp0nbmME';
    }
  });