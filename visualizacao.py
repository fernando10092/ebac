import csv
from sys import argv
import pandas as pd
import seaborn as sns

# Extraindo as colunas hora e taxa
df = pd.read_csv('./taxa-cdi.csv')

# Criando o gráfico
grafico = sns.lineplot(x=df['hora'], y=df['taxa'])

# Definindo os ticks do eixo X
grafico.set_xticks(range(len(df)))  # Garantindo que os ticks estão bem definidos

# Definindo as etiquetas do eixo X e rotacionando-as
_ = grafico.set_xticklabels(labels=df['hora'], rotation=90)

# Verificando se o argumento foi passado; caso contrário, usando um nome padrão
output_filename = argv[1] if len(argv) > 1 else "grafico"

# Salvando o gráfico
grafico.get_figure().savefig(f"{output_filename}.png")
