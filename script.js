// Inicializar o gráfico
var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
    renderer: 'canvas',
    useDirtyRect: false
});

// Configuração do gráfico
var option = {
    tooltip: {
        trigger: 'item',
        formatter: function(params) {
            // Função para formatar o valor monetário
            function formatCurrency(value) {
                return new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(value);
            }
            // Formatar o texto do tooltip
            return `${params.marker}<strong style="color: ${params.color};">${params.name}</strong>: <strong>${params.value}</strong> <strong>(${params.percent}%)</strong><br/><strong>Valor:</strong> ${formatCurrency(params.data.additionalValue)}`;
        }
    },
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 25,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 13, name: 'Danos Elétricos', additionalValue: 19393.00, itemStyle: { color: '#002b4d' } },
                { value: 1, name: 'Desligamento', additionalValue: 296.96, itemStyle: { color: '#606d80' } },
                { value: 1, name: 'Devolução de Crédito', additionalValue: 202.93, itemStyle: { color: '#567ebb' } },
                { value: 4, name: 'Fornecer Documentação', additionalValue: 5136.42, itemStyle: { color: '#2b4c7e' } },
                { value: 1, name: 'Reclamação cliente', additionalValue: 74.43, itemStyle: { color: '#dce0e6' } }
            ]
        }
    ]
};

// Aplicar a configuração do gráfico
myChart.setOption(option);

// Redimensionar o gráfico quando a janela é redimensionada
window.addEventListener('resize', function() {
    myChart.resize();
});
