import os
import time
import json
from random import random
from datetime import datetime
import requests
import csv
from sys import argv
import pandas as pd
import seaborn as sns

# Função para extrair os dados da taxa CDI
def extrair_taxa_cdi():
    URL = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4392/dados'

    try:
        response = requests.get(url=URL)
        response.raise_for_status()
    except requests.HTTPError as exc:
        print("Dado não encontrado, continuando.")
        return None
    except Exception as exc:
        print("Erro, parando a execução.")
        raise exc
    else:
        dado = json.loads(response.text)[-1]['valor']
        return dado

# Função para salvar os dados no arquivo CSV
def salvar_dados_no_csv(dado):
    for _ in range(10):
        data_e_hora = datetime.now()
        data = datetime.strftime(data_e_hora, '%Y/%m/%d')
        hora = datetime.strftime(data_e_hora, '%H:%M:%S')

        cdi = float(dado) + (random() - 0.5)

        if not os.path.exists('./taxa-cdi.csv'):
            with open(file='./taxa-cdi.csv', mode='w', encoding='utf8') as fp:
                fp.write('data,hora,taxa\n')

        with open(file='./taxa-cdi.csv', mode='a', encoding='utf8') as fp:
            fp.write(f'{data},{hora},{cdi}\n')

        time.sleep(1)

    print("Sucesso ao salvar dados no CSV.")

# Função para gerar o gráfico
def gerar_grafico():
    df = pd.read_csv('./taxa-cdi.csv')

    grafico = sns.lineplot(x=df['hora'], y=df['taxa'])
    grafico.set_xticks(range(len(df)))
    _ = grafico.set_xticklabels(labels=df['hora'], rotation=90)

    output_filename = argv[1] if len(argv) > 1 else "grafico"
    grafico.get_figure().savefig(f"{output_filename}.png")
    print(f"Gráfico salvo como {output_filename}.png")

# Função principal que combina as etapas
def main():
    # Extraindo os dados da taxa CDI
    taxa_cdi = extrair_taxa_cdi()

    if taxa_cdi:
        # Salvando os dados no arquivo CSV
        salvar_dados_no_csv(taxa_cdi)

        # Gerando o gráfico com base nos dados extraídos
        gerar_grafico()

if __name__ == "__main__":
    main()
