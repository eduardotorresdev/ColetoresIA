# ColetoresDeLixoIA
**Atividade** prática da disciplina **Inteligência** **Artificial** do curso de Ciência da computação 2020.1 da Universidade Federal do Maranhão.
## Apresentação
Desenvolvimento de **dois robôs inteligentes**, sendo eles R1 e R2, que possuem o objetivo em comum de **coletar e transportar lixo** em um **mundo** composto por uma **tabela 20x20 unidades**, **duas lixeiras**(X e Y), um **incinerador** e uma **recicladora**.

 ## Objetivo
Medir o **tempo de execução** de cada uma das arquiteturas **(reativo simples, baseada em modelos, objetivos e utilidade)** para avaliar qual teve o melhor desempenho.

## Especificações

 - O **agente R1**, vai ser responsável pela **coleta de lixo e o depósito do
   mesmo em uma das lixeiras**, fazendo essa mesma atividade até que o
   mundo esteja completamente limpo.
 - Já o **agente** **R2**, terá papel de **verificar as lixeiras X e Y**, e caso
   haja lixo, será responsável por **transportá-lo até o incinerador ou
   para a recicladora**, se o lixo for orgânico ou reciclável,
   respectivamente.
 - **Quarenta (40) pedaços de lixo** são colocados aleatoriamente no
   ambiente.
 - Os robôs têm **preferência** por coletar **lixo reciclável**, pois demoram
   mais para se deteriorar no ambiente.
 - Cada **robô** pode **carregar** apenas um **lixo** por **vez**.
 - Os **robôs** podem executar as seguintes **ações**: Andar para esquerda,
   andar para direita, andar para cima, andar para baixo, pegar o lixo,
   soltar o lixo, NoOp.
   
 - Os **robôs** têm as seguintes **percepções**: local onde estão, conteúdo do local, conteúdo dos 4 locais vizinhos ao local onde está, local das lixeiras, local do incinerador e da recicladora.
 - O **ambiente** deve ter as dimensões 20x20, o robô **R1** inicia na **posição** 1x1, o robô **R2** inicia na **posição** 1x20. As **lixeiras** estão em 12x1 e 12x20, o **incinerador** está em 20x1 e a **recicladora** em 20x20.
 - Os **agentes** devem ser implementados utilizando as **arquiteturas**: reativo simples, baseada em modelos, objetivos e utilidade.
 
 ## Equipe
 - Eduardo José Torres Rocha
 - Cícero Joe Rafael Lima de Oliveira

