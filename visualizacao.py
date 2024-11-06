import csv
from sys import argv, exit

import matplotlib.pyplot as plt
import pandas as pd
import seaborn as sns

if len(argv) < 2:
    print("Uso: python visualizacao.py <grafico_CDI>")
    exit(1)


output_image = argv[1]
# Verifica se o arquivo CSV existe e pode ser lido
try:
    df = pd.read_csv('./taxa-cdi.csv')
except FileNotFoundError:
    print("Erro: Arquivo 'taxa-cdi.csv' não encontrado.")
    exit(1)
except pd.errors.EmptyDataError:
    print("Erro: Arquivo 'taxa-cdi.csv' está vazio.")
    exit(1)
except pd.errors.ParserError:
    print("Erro: Arquivo 'taxa-cdi.csv' está mal formatado.")
    exit(1)

# Verifica se as colunas 'hora' e 'taxa' existem no DataFrame
if 'hora' not in df.columns or 'taxa' not in df.columns:
    print("Erro: Arquivo 'taxa-cdi.csv' deve conter as colunas 'hora' e 'taxa'.")
    exit(1)

# Extraindo as colunas hora e taxa e salvando no grafico
plt.figure(figsize=(10, 6))
grafico = sns.lineplot(x='hora', y='taxa', data=df)

# Configurando o gráfico e rotacionando os labels do eixo x
grafico.set_xticks(range(len(df['hora'])))
grafico.set_xticklabels(labels=df['hora'], rotation=90)

grafico.get_figure().savefig(f"{output_image}.png")
plt.close()