/* 
Dependencias: são geralmente utilizadas para declarar os pacotes nessesários 
para executar seus projetos em um ambiente de execução;

devDependencias: são utilizadas para inciar pacotes necessários 
para executar seu projeto em um cenário de desenvolvimento e testes

( Como pacotes telacionados a teste e formatação 
  geral dp código-fonte do seu projeto ).

  Atualizando pacotes:

#Verifica a versão dos pacotes desatualizados: npm outdated
#Atualizada o pacote: npm i <nome-do-pacote>@latest

#Deletando pacotes 
#npm uninstall <nome-do-pacote> 
// forma mais correta de desisntalar um pacote pois ele remove do projeto e da pasta node_modules

O arquivo packge-lock.json é criado automaticamente quando você instala
ou atualiza as dependências do projeto com o   gerenciador de pacotes npm (NODE PACKAGE MANEGER).

Ele serve como uma espécie de 'contrato' entre o seu projeto e as suas dependências,
garantindo que todas as pessoas qie trabalham no projeto ou que o executem em diferentes máquinas obtenham 
exatamente as mesmas versões das dependências instaladas.

##_- Resumo -_##

# NPM
O npm (Node Package Manager) é o gerenciador de pacotes padrão para o ambiente Node.js. Ele é uma ferramenta de linha de comando que permite instalar, gerenciar e compartilhar bibliotecas e módulos de código JavaScript desenvolvidos por terceiros.

O npm funciona como um repositório online de pacotes JavaScript, onde desenvolvedores podem publicar e compartilhar suas bibliotecas para que outros desenvolvedores possam utilizá-las em seus projetos. Além disso, o npm também permite que você instale e gerencie pacotes localmente em seus próprios projetos.

Com o npm, você pode fazer o seguinte:

Instalar pacotes: É possível instalar pacotes específicos do npm em seu projeto com o comando npm install <nome-do-pacote>. Isso baixa o pacote e suas dependências do repositório npm e os torna disponíveis para uso em seu código.

Gerenciar dependências: O npm mantém um arquivo chamado package.json que registra as dependências do seu projeto. Você pode adicionar, atualizar ou remover pacotes diretamente no arquivo package.json e, em seguida, executar o comando npm install para instalar todas as dependências listadas no arquivo.

Publicar pacotes: Se você criou uma biblioteca ou módulo JavaScript que deseja compartilhar com outros desenvolvedores, pode publicá-lo no npm. Isso permite que outros desenvolvedores instalem e usem sua biblioteca em seus próprios projetos.

Atualizar pacotes: O npm facilita a atualização de pacotes para versões mais recentes. Você pode usar o comando npm update para atualizar todos os pacotes para suas versões mais recentes ou especificar pacotes individuais para atualização.

Além disso, o npm oferece muitos recursos adicionais, como a capacidade de lidar com diferentes versões de pacotes, instalar pacotes globalmente no sistema, gerenciar scripts personalizados e muito mais.

O npm é amplamente utilizado na comunidade Node.js e é uma ferramenta essencial para o desenvolvimento de projetos JavaScript e Node.js. Com o npm, você pode facilmente aproveitar a vasta variedade de pacotes e bibliotecas disponíveis, acelerando o desenvolvimento de seus projetos e promovendo a reutilização de código.

*/
