/*
   A variável usuarios é um array de escopo global.
   Ela é responsável por amarzenar as informações
   de todos os usuários que forem cadastrados
 */
   let usuarios = [];

   const salvar = () => {
  
   /*Cria uma variável chamada sexo e a inicializa com uma string vazia*/
   let sexo = "";
  
   /*
   Armazena a referência dos elementos HTML com atributo name igual a 
  "sexo"
   */
   let elementosSexo = document.getElementsByName("sexo");
  
   /*
   Percorre os elementos de sexo no HTML para pegar o valor
   marcado pelo usuário
   */
   for (let i = 0; i < elementosSexo.length; i++) {
         /*
          Se o elemento estiver selecionado (checked)
          a variável sexo irá receber o valor do mesmo
          e o loop for será encerrado.
         */
           if (elementosSexo.item(i).checked) {
               sexo = elementosSexo.item(i).value;
                break;
           }
   }
  
   /*
     Armazena a referência dos checkbox
   */
   let elementosGenerosPreferidos = document.querySelectorAll("input[type=checkbox]");
  
   /*
   Cria um Array que irá armazenar os 
   gêneros preferidos selecionados pelo usuário
   */
   let generosPreferidos = [];
  
   /*
    Percorre os checkbox presentes no HTML
   */
   for (let i = 0; i < elementosGenerosPreferidos.length; i++) {
  
     /*
     Se o elemento HTML estiver marcado (checked) o valor do mesmo deverá
     ser adicionado ao array
     */
     if (elementosGenerosPreferidos.item(i).checked) {
        generosPreferidos.push(elementosGenerosPreferidos.item(i).value);
     }
  }
  
   /*Cria um variável JSON quer armazena informações do usuário*/
   let usuario = {
   nome: document.getElementById("nome").value,
   idade: document.getElementById("idade").value,
   sexo: sexo,
   plataformaStream: document.getElementById("plataforma_stream").value,
   generosPreferidos: generosPreferidos
   };
  
   /*
    Adiciona as informações do usário em um array de usuários
  */
   usuarios.push(usuario);
  
   let conteudoTabela = "";
  
   /*
     Itera o array de usuários para montar dinamicamente
     as informações que serão exibidas na tabela
  */
   for (let i = 0; i < usuarios.length; i++) {
  
       /*
        Armazena as informações de todas as linhas da tabela
       */
       conteudoTabela += `
                      <tr>
                          <td>${i + 1}</td>
                          <td>${usuarios[i].nome}</td>
                          <td>${usuarios[i].idade}</td>
                          <td>${usuarios[i].sexo}</td>
                          <td>${usuarios[i].plataformaStream}</td>
                         <td>${usuarios[i].generosPreferidos.join()}</td>
                      </tr>`;
  }
  
  /*
  Altera o HTML da tabela com as informações dos usuários cadastrados atéo presente momento
  */
  document.getElementById("tabela_usuario").getElementsByTagName("tbody")[0].innerHTML = conteudoTabela;
  
  /*
  Amarzena uma referênia ao HTML da tabela
  */
  let divTabela = document.getElementsByClassName("table-responsive")[0];
  
  /*Remove a classe d-none fazendo com que a tabela fique visível*/
  divTabela.classList.remove("d-none");
  
  }

/*
  O código javascript abaixo é responsável por "descobrir" a opção de sexo marcada pelo usuário.
*/

/*Cria uma variável chamada sexo e a inicializa com uma string vazia*/
 let sexo = "";

/*   Armazena a referência dos elementos HTML com atributo name igual a "sexo"
*/
 let elementosSexo = document.getElementsByName("sexo");

 /*
   Percorre os elementos de sexo no HTML para pegar o valor
   marcado pelo usuário
*/
 for (let i = 0; i < elementosSexo.length; i++) {
             /*
                Se o elemento estiver selecionado (checked)
                a variável sexo irá receber o valor do mesmo
                e o loop for será encerrado.
             */
              if (elementosSexo.item(i).checked) {
                 sexo = elementosSexo.item(i).value;
                 break;
              }
}
/*
O código javascript abaixo é responsável por "descobrir" quais opções entre os gêneros preferidos o usuário marcou. O código é um pouco semelhante ao de cima exceto pelo uso do querySelectorAll e do array generosPreferidos.
*/

/*Armazena a referência dos checkbox */
let elementosGenerosPreferidos = document.querySelectorAll("input[type=checkbox]");

 /*
    Cria um Array que irá armazenar os 
    gêneros preferidos selecionados pelo usuário
*/
 let generosPreferidos = [];

 /*
    Percorre os checkbox presentes no HTML
 */
 for (let i = 0; i < elementosGenerosPreferidos.length; i++) {

 /*
   Se o elemento HTML estiver marcado (checked) o valor do mesmo deverá
   ser adicionado ao array
*/
    if (elementosGenerosPreferidos.item(i).checked) {
      generosPreferidos.push(elementosGenerosPreferidos.item(i).value);
    }
}

/*
O querySelectorAll é uma função  javascript que retorna todas as referências de elementos HTML baseados em filtro informado como parâmetro. Neste caso o parâmetro é input[type=checkbox] que diz à função para retornar as referências de tags input deste tipo.


Uma vez que o usuário pode selecionar mais de um gênero preferido temos que armazenar isso num array, logo fica claro o propósito da variável generosPreferidos ter sido definida como um array. 


Arrays são definidos usando colchetes []


Utilize a função push para adicionar itens à um array


Itens dentro de um array são acessados através de índices. Estes índices sempre começam a partir do número zero. Se por exemplo a variável generosPreferidos tiver 3 elementos dentro dela e você quiser acessar diretamente um destes 3 elementos a sintaxe seria a seguinte


generosPreferidos[0]; // Pega o primeiro elemento
generosPreferidos[1]; // Pega o segundo elemento
generosPreferidos[2]; // Pega o terceiro elemento

Como todas as informações do formulário são atreladas à uma única pessoa. Temos que atribuir estas informações em uma única variável. E é ai que entra o JSON. Como disse no começo do post este tipo de variável recebe o nome de Objeto


A sintaxe do JSON é simples e consiste em: 

let nomeDaVariavel = { atributo1 : valor, atributo2 : valor }


No caso deste formulário, o JSON ficou assim
*/

/*Cria um variável JSON quer armazena informações do usuário*/
 let usuario = {
 nome: document.getElementById("nome").value,
 idade: document.getElementById("idade").value,
 sexo: sexo,
 plataformaStream: document.getElementById("plataforma_stream").value,
 generosPreferidos: generosPreferidos
};
/*
Repare que cada atributo dentro do JSON representa um campo do formulário


A ideia deste form é coletar informações de vários usuários, logo para exibir estas informações em uma tabela precisamos armazená-las em um array. 


A variável usuarios é um array de objetos de escopo global. Isto porque ela foi definida fora da função salvar, na raíz do javascript.


Varáveis globais são acessíveis por qualquer função presente no javascript, ou seja, se tivéssemos outra função além da salvar a variável usuarios estaria acessível para ela.

*/
/*
  A variável usuarios é um array.
  Ela é responsável por amarzenar as informações
  de todos os usuários que forem cadastrados
*/
 //let usuarios = [];

//Todo usuário recém cadastrado é adicionado ao array usuarios


/*
   Adiciona as informações do usário em um array de usuários
*/
 usuarios.push(usuario);
/*
É necessário percorrer o array usuarios pegando as informações de todos os usuários que foram cadastrados para montar as linhas da tabela dinamicamente.
*/

let conteudoTabela = "";

 /*
   Itera o array de usuários para montar dinamicamente
   as informações que serão exibidas na tabela
*/
 for (let i = 0; i < usuarios.length; i++) {

       /*
          Armazena as informações de todas as linhas da tabela
        */
        conteudoTabela += `
                    <tr>
                        <td>${i + 1}</td>
                        <td>${usuarios[i].nome}</td>
                        <td>${usuarios[i].idade}</td>
                        <td>${usuarios[i].sexo}</td>
                        <td>${usuarios[i].plataformaStream}</td>
                       <td>${usuarios[i].generosPreferidos.join()}</td>
                    </tr>`;
}
/*
Uma vez que temos as informações dinâmicas da tabela basta manipular o HTML da mesma para que seja exibido no browser
*/

/*
Altera o HTML da tabela com as informações dos usuários cadastrados atéo presente momento
*/
document.getElementById("tabela_usuario").getElementsByTagName("tbody")[0].innerHTML = conteudoTabela;

 /*
    Amarzena uma referênia ao HTML da tabela
 */
let divTabela = document.getElementsByClassName("table-responsive")[0];
 /*
   Remove a classe d-none fazendo com que a tabela fique visível
 */
divTabela.classList.remove("d-none");
