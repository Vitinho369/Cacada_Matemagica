# Caçada Matemágica
Repositório do jogo utilizado como forma de avaliação da Unidade II da disciplina de Autoria Web do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) da EAJ/UFRN


## Proposta da Jogo
O jogo tem como objetivo reforçar a crianças de ensino fundamental, tendo com objetivo trabalhar com os fundamentos da Base Nacional Comum Curricular (BNCC), uma vez que segundo ela: "O conhecimento matemático é necessário para todos os alunos da Educação Básica, seja por sua grande aplicação na sociedade contemporânea, seja pelas suas potencialidades na formação de cidadãos críticos, cientes de suas responsabilidades sociais.". Deste modo, tem-se como objetivo, tornar o aprendizado divertido por meio de um processo de gamificação da aprendizagem e garantir o raciocínio rápido e lógico, como também auxiliando na atenção e na coordenação motora dos jogadores, tendo em vista as dificuldades que o jogo irá impor durante o seu percurso.


## Contexto do Jogo


Você é um caçador capaz de dominar a arte de unir a magia e a matemática, também conhecida como Matemágica, quer se tornar um caçador mestre nessa arte. Porém, para isso ele precisa passar por um grande e perigoso desafio, em meio a floresta da Matemágica, caçar as respostas Matemágicas certas em meio as perguntas que irão surgir durante o percurso e ele deve ser rápido e cuidadoso nas respostas que captura, algumas delas podem te fazer perder seu estoque de respostas Matemágicas e te distanciar de seu objetivo, todas as respostas aparecerão em forma de moeda, mas não seja precipitado, para saber a certa, deve-se atentar ao número que elas carregam, pois eles indicarão a resposta do caçador a operação Matemágica apresentada. Quanto mais perto de finalizar o jogo, maior será a dificuldade, pois as respostas começarão a vir mais rapidamente, bem como sua velocidade aumentará, dificultando sua missão. Boa sorte caçador!


## Como jogar?


* 1 - Faça download do repositório: `git clone https://github.com/Vitinho369/Cacada_Matemagica.git`  


* 2 - Execute o comando `npm install` em seu terminal


* 3 - Execute o comando `npm start`


* 4 - Em seguida abra seu navegador e acesse o link `http://localhost:3000`


* Caso os passos acima não funcionem por algum problema de configuração no seu Node.js ou caso não o possua instalado, recomenda-se utilizar a extensão live server do Visual Studio Code


> Ao acessar o link, você será apresentado ao contexto do jogo e aprenderá a como jogar, no entanto, como é destinado a uma faixa etária para movimentar o personagem do jogo, basta apertar a tecla espaço para ele dar um salto enquanto corre em direção seu objetivo, tendo em vista que é um jogo de corrida onde o personagem pula para alcançar as respostas corretas para os cálculos que lhes são apresentados.


## Descrição dos códigos desenvolvidos


Os códigos desenvolvidos foram criados seguindo uma arquitetura semelhante a MVC, porém com algumas mudanças. Existe a pasta Models, onde ficam as regras de negócio do jogo, equivalente a camada de Domínio no modelo MVC, a pasta Assets, onde se localiza todas as imagens utilizadas no jogo e a pasta View que é a responsável por expor ao usuário o jogo, sendo a camada de visão, ou seja, responsável por realizar todo o contato com o usuário e transmitir as interações do usuário com a camada de Domínio.