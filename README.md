# Biblioteca JS
Projeto - Validador de CPF

## Desafio
Implementar um validador de número de CPF.
A biblioteca deverá validar o número do CPF através dos dígitos verificadores, utilizando a regra matemática específica e retornar true ou false de acordo com o caso.

O objetivo central deste projeto é construir uma biblioteca (library) que atenda aos requisitos do desafio detalhados abaixo.
- README.md com descrição do módulo, instruções de instalação, uso e documentação da API.
- index.js: Biblioteca deve exportar uma função e fazer uso de features de ES6 onde for apropriado.
- package.json com nome, versão, descrição, autores, licença, dependências, scripts (pretest, test, ...)
- .eslintrc com configuração para linter.
- test/index.spec.js: com as rotinas de teste escritas para esta biblioteca. Os testes devem ser implementados com Mocha e NYC.
- .gitignore para ignorar node_modules ou outras pastas que não devem ser incluídas no controle de versões.

# Algoritmo para Validar CPF
O cálculo para validar um CPF é especificado pelo Ministério da Fazenda, que disponibiliza no próprio site a forma para validação de CPF.
O CPF é formado por 11 dígitos numéricos que seguem a máscara "000.000.000-00", a verificação do CPF acontece utilizando os 9 primeiros dígitos e, com um cálculo simples, verificando o resultado corresponde aos dois últimos dígitos.
Vamos usar como exemplo, um CPF fictício "529.982.247-25".

### Validação do primeiro dígito
Primeiramente multiplica-se os 9 primeiros dígitos pela sequência decrescente de números de 10 a 2 e soma os resultados.
5x10  +  2x9  +  9x8  +  9x7  +  8x6  +  2x5  +  2x4  +  4x3  +  7x2  =  295

O próximo passo da verificação também é simples, basta multiplicar esse resultado por 10 e dividir por 11. 

295 x 10 / 11 (O resultado que interessa é o RESTO da divisão).
O resultado da divisão é 268 e o RESTO é 2.

Se ele for igual ao primeiro dígito verificador, a primeira parte da validação está correta.
Isso significa que o CPF exemplo passou na validação do primeiro dígito.

### Validação do segundo dígito
A validação do segundo dígito é semelhante à primeira, porém considerar os 9 primeiros dígitos, mais o primeiro dígito verificador, e multiplicar esses 10 números pela sequencia decrescente de 11 a 2. 

5x11  +  2x10  +  9x9  +  9x8  +  8x7  +  2x6  +  2x5  +  4x4  +  7x3  +  2x2  =  347

Seguindo o mesmo processo da primeira verificação, multiplicar por 10 e dividir por 11.
347 x 10 / 11 
O resultado da divisão é 315 e o RESTO é 5.

Verificar se ele corresponde ao segundo dígito verificador.
Se sim, isso significa que o CPF exemplo também passou na validação do segundo dígito e o CPF 529.982.247-25 é válido.

Observação Importante: Se o resto da divisão for igual a 10, ele é considerado como 0.

### CPFs Inválidos Conhecidos
Existe alguns casos de CPFs que passam nessa validação, mas que ainda são inválidos.
É os caso dos CPFs com dígitos repetidos (111.111.111-11, 222.222.222-22, ...)
Esses CPF atendem à validação, mas ainda são considerados inválidos.

No algoritmo, é necessário verificar se todos os dígitos do CPF são iguais e, neste caso, considerar que ele é inválido.

### Como Conferir a Origem de um CPF
Um meio interessante para a conferência do número de um CPF é identificar o ESTADO em que este foi emitido.
Esse número corresponde ao último algarismo anterior aos dois dígitos de controle. No exemplo CPF nº 000.000.006-00, o número 6 mostra que esse documento foi emitido no estado de Minas Gerais.

Veja abaixo os códigos correspondentes a outros estados brasileiros:
- 1 - Distrito Federal, Goiás, Mato Grosso do Sul e Tocantins;
- 2 - Pará, Amazonas, Acre, Amapá, Rondônia e Roraima;
- 3 - Ceará, Maranhão e Piauí;
- 4 - Pernambuco, Rio Grande do Norte, Paraíba e Alagoas;
- 5 - Bahia e Sergipe;
- 6 - Minas Gerais;
- 7 - Rio de Janeiro e Espírito Santo;
- 8 - São Paulo;
- 9 - Paraná e Santa Catarina;
- 0 - Rio Grande do Sul.

