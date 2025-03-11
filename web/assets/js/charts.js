// Wait for both DOM and Chart.js to be ready
function initChartsWhenReady() {
    console.log('Checking if ready to initialize charts...');
    if (typeof Chart === 'undefined') {
        console.log('Chart.js not loaded yet, waiting...');
        setTimeout(initChartsWhenReady, 100);
        return;
    }
    initializeCharts();
}

// Initialize on both load events to ensure we catch all scenarios
window.addEventListener('load', initChartsWhenReady);
document.addEventListener('DOMContentLoaded', initChartsWhenReady);

function initializeCharts() {
    console.log('Initializing charts...');
    
    // Token Distribution Pie Chart
    const distributionCtx = document.getElementById('tokenDistribution');
    console.log('Distribution context:', distributionCtx);
    
    if (distributionCtx) {
        new Chart(distributionCtx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Sectors (50%)',
                    'Future Sectors (20%)',
                    'Reserves (20%)',
                    'Community (10%)'
                ],
                datasets: [{
                    data: [50, 20, 20, 10],
                    backgroundColor: [
                        '#00FF9D',  // primary
                        '#4DEEEA',  // secondary
                        '#FF10F0',  // accent1
                        '#74EE15'   // accent2
                    ],
                    borderWidth: 2,
                    borderColor: '#000000'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            padding: 15
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Inflation Rate Curve Chart
    const inflationCtx = document.getElementById('tokenGrowth');
    console.log('Inflation context:', inflationCtx);
    
    if (inflationCtx) {
        const years = [];
        const inflationRates = [];
        
        // First Decade: 5% annual
        for (let i = 1; i <= 10; i++) {
            years.push(`Year ${i}`);
            inflationRates.push(5);
        }
        
        // Second Decade: 4% annual
        for (let i = 11; i <= 20; i++) {
            years.push(`Year ${i}`);
            inflationRates.push(4);
        }
        
        // Third Decade: 3% annual
        for (let i = 21; i <= 30; i++) {
            years.push(`Year ${i}`);
            inflationRates.push(3);
        }
        
        // Fourth Decade: 2% annual
        for (let i = 31; i <= 40; i++) {
            years.push(`Year ${i}`);
            inflationRates.push(2);
        }
        
        // Fifth+ Decades: 1% annual
        for (let i = 41; i <= 100; i++) {
            years.push(`Year ${i}`);
            inflationRates.push(1);
        }
        
        new Chart(inflationCtx, {
            type: 'line',
            data: {
                labels: years,
                datasets: [{
                    label: 'Annual Inflation Rate (%)',
                    data: inflationRates,
                    borderColor: '#00FF9D',
                    backgroundColor: 'rgba(0, 255, 157, 0.1)',
                    tension: 0.1,
                    fill: true,
                    pointBackgroundColor: '#00FF9D',
                    pointRadius: 0,
                    pointHoverRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 6,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            callback: function(value) {
                                return value + '%';
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            },
                            maxRotation: 0,
                            autoSkip: true,
                            maxTicksLimit: 10
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff',
                            font: {
                                family: 'Inter',
                                size: 12
                            }
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return `Inflation: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }
}
