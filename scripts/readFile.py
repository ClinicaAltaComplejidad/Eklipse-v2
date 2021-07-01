def app() :
    
    try:
        file = open('./factura.txt', 'r')
    except FileNotFoundError as error :
        print('El archivo no se encuentra -> ', error)
    except TypeError as e :
        print('Ocurrió un error -> ', e)
    
    list_words = []

    for line in file :
        word_list = line.split(';')
        list_words.append(word_list)
    
    print('result -> ', list_words)


if __name__ == '__main__' :
    app()