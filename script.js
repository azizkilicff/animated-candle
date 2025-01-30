function createSpark() {
    const spark = document.createElement('div');
    spark.className = 'spark';
    
    // Random position around flame
    const flameRect = document.querySelector('.flame').getBoundingClientRect();
    const x = flameRect.left + flameRect.width/2 + Math.random() * 10 - 5;
    const y = flameRect.top + flameRect.height/2;
    
    spark.style.left = x + 'px';
    spark.style.top = y + 'px';
    
    // Random movement
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 30;
    const tx = Math.cos(angle) * distance;
    const ty = -Math.abs(Math.sin(angle) * distance) - 20;
    
    spark.style.setProperty('--tx', tx + 'px');
    spark.style.setProperty('--ty', ty + 'px');
    
    spark.style.width = spark.style.height = (2 + Math.random() * 3) + 'px';
    spark.style.animation = `spark ${0.5 + Math.random() * 0.5}s linear`;
    
    document.body.appendChild(spark);
    
    // Remove spark after animation
    setTimeout(() => spark.remove(), 1000);
}

// Create sparks periodically
setInterval(createSpark, 50);