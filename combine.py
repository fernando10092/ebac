import subprocess
from sys import argv, exit


def extracao_cdi():
    # Call the extracao-cdi.py script
    subprocess.run(['python', 'extracao.py'], check=True)

def visualizacao(output_image):
    # Call the visualizacao.py script with the output image name
    subprocess.run(['python', 'visualizacao.py', output_image], check=True)

if __name__ == "__main__":
    if len(argv) < 2:
        print("Uso: python combine.py <grafico-combine>")
        exit(1)

    output_image = f"{argv[1]}.png"

    extracao_cdi()
    visualizacao(output_image)