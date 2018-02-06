# Aula 57 - Qualidade de Software

* Porque qualidade é tão importante?
  - é necessário garantir a qualidade para o projeto, já que estaremos desenvolvendo um software.

* slides da aula
  - https://willianjusten.com.br/js-tdd-slides


# Aula 58 - Alguns fatores para alcançar qualidade em seu projeto

* Como atingir os fatores de desenvolvimento
  - Ter bom senso para que se você pegar este código depois se você ou outra pessoa irá conseguir dar manutenção.

  - Variáveis semânticas
  - Nomes fáceis de escrever e ler
  - substantivos para classes e objetos - User, Product
  - verbos para métodos - deleteUser, GetUser
  - pequenos
  - método deve ter uma única responsabilidade
  - permitir o reuso - tentar utilizar o método de forma que possa usar no futuro
  - facilmente testáveis
  - não comente um código ruim, reescreva. Código bom é o que não tem comentário e ainda assim é fácil de entender
  
  - FAÇA TESTES!!!!

# Aula 59 - Por que testar?

* Reduz o tempo em análise e correção de bugs - quando escrevemos, escrevemos e testamos o comportamente dele ao mesmo tempo.
* Facilita na refatoração
* Gera documentação
* Melhora o design do código - escrever o mínimo possível
* Garante que o trabalho tenha qualidade, com menos erros, código limpo e documentado

# Aula 60 - Como funciona o fluxo do TDD?

* divido em 3 etapas - escreve, testa e refatora
* Regras
  - sempre começar pelo teste
    - escreve um código bem burro, que seja fácil sair o resultado esperado. Se for soma por exemplo, testar 2 + 2
    - só vai escrever um novo método quando corresponder todas as coisas em relação ao que está sendo testado.
    - corrigir o código
    - refatorar o código



# Aula 61 - Como pensar em testes? Padrão de teste.

* O que o código precisa fazer? Precisa entender o que o código precisa fazer.
* Que dados ele vai receber? Valor em strign? Number
* O que ele precisa retornar? 
* Que ações são necessárias para o código rodar? Como o método vai ser chamado?

## Padrão de teste

* Como escrever
  - Ele deve fazer isso quando aquilo - it should do that when this

            it('should return 4 when receive 2,2') {
              expect(sum(2,2)).to.equal(4);
            }




# Aula 62 - Tipos de teste

* Base - são os testes unitários
* Teste de serviço / integração
* Teste de UI - é importante para verificar se consegue chamar as funcionalidades corretamente.


# Aula 63 - Algumas dicas para os tipos de testes

* Teste unitário - o objetivo é ser bem rápido e fazer o teste de umc omportamento só
  - todos os testes precisam ser independentes, evitar ruído entre eles.
  - escolher os melhores asserts para fazer o teste
  - user mocks para chamadas externas
  - utilizar dele para organizar o design do código


* Teste de integração - ja fizemos todos os testes e precisamos confirmar se estão em conjunto um com outro.
  - cuidado para não criar teste inútil, não precisa refazer teste na integração que ja foi feito no teste unitário.
  - isolar o máximo possível dos ambientes.


* Teste de aceitação (E2E) - teste final, já está tudo pronto, então você vai verificar se tudo está funcionando.
  - validar apenas o fluxo de funcionamento do projeto.


# Aula 64 - Spies, Stubs e Mocks

* Spies - Diz se o método foi chamado, quantas vezes, quais as respostas.
  - São úteis para testar callbacks e como os métodos foram utilizados dentro do sistema.
  - verifica se um método de fato foi chamado.

* Stubs - vai substituir, posso mudar o comportamente, os valores e as exceções que vamos levantar
  - utilizo quando quero controlar o comportamente de um teste
  - quando quero pular alguma etapa de execução


* Mocks - é a linha mais alta que temos de um elemento falso.

  - Deve ser utilizado quando preciso de um stub mas preciso veriicar multiplos comportamentos.