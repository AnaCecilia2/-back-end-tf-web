CREATE TABLE usuario ( 
  idUsuario SERIAL , 
  nome VARCHAR (60)  NOT NULL, 
  senha VARCHAR (50) NOT NULL, 
  email VARCHAR (255) UNIQUE NOT NULL, 
  telefone varchar (25) UNIQUE NOT NULL,
  PRIMARY KEY (idUsuario)
); 
CREATE TABLE anuncio ( 
  idAnuncio serial, 
  nomeLivro VARCHAR (100)  NOT NULL, 
  preco float (5), 
  descricao VARCHAR (500) NOT NULL,
  dataPub TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  fk_usuario_id int,
  PRIMARY KEY (idAnuncio),
  FOREIGN KEY (fk_usuario_id) REFERENCES usuario (idUsuario) ON DELETE CASCADE ON UPDATE CASCADE
); 