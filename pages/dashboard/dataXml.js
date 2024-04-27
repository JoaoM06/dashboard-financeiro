
import { parse } from 'node-html-parser'

const xmlString = `
<GovDigital>
    <emissao>
        <nf-e>
            <prestacao>2024-04-01</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>08149102000185</documento>
                <nome>CONDOM�NIO VIVENDAS</nome>
                <cep></cep>
                <logradouro>Estrada do Campinho</logradouro>
                <numero>2321</numero>
                <complemento></complemento>
                <bairro>Campo Grande</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Cuidado de quatro �rvores com poda de destopo para reduzir a altura das
�rvores. Remo��o do material e limpeza do local.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>5400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>5400.00</valor>
                </item>
            </itens>
            <obs>Bradesco Ag.0795 Cc 2492 dig 9 Jos� Arthur Rocha Araujo</obs>
            <deducoes/>
            <senha>2NUO.7XYK.ESON.X7LC</senha>
            <numero>187</numero>
            <serie>NF-e</serie>
            <valorTotal>5400.00</valorTotal>
            <valorBase>5400.00</valorBase>
            <valorImposto>166.60</valorImposto>
            <valorLiquido>5400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-10</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>01361760702</documento>
                <nome>CONDOM�NIO DO EDIF�CIO ELISEU VISCONTI</nome>
                <cep>22031-110</cep>
                <logradouro>Ladeira dos Tabajaras</logradouro>
                <numero>155</numero>
                <complemento></complemento>
                <bairro>Copacabana</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>PODA DE DUAS MANGUEIRAS GRANDES COM PODAS DE CONFORMA��O DE COPA.
REMO��O DO MATERIAL E LIMPEZA DO LOCAL</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>3000.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>3000.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 - JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>2OS7.HX61.I5ST.FA7T</senha>
            <numero>188</numero>
            <serie>NF-e</serie>
            <valorTotal>3000.00</valorTotal>
            <valorBase>3000.00</valorBase>
            <valorImposto>92.56</valorImposto>
            <valorLiquido>3000.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>97391247000118</documento>
                <nome>CONDOM�NIO DO EDIF�CIO ESTRELA DO MAR</nome>
                <cep></cep>
                <logradouro>RUA JORNALISTA HENRIQUE CORDEIRO</logradouro>
                <numero>310</numero>
                <complemento></complemento>
                <bairro>BARRA DA TIJUCA</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE RETIRADA DE �RVORE TOMBADA.
REMO��O DO MATERIAL E LIMPEZA DO LOCAL</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>3000.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>3000.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>7OFK.9OM0.84TW.17CC</senha>
            <numero>189</numero>
            <serie>NF-e</serie>
            <valorTotal>3000.00</valorTotal>
            <valorBase>3000.00</valorBase>
            <valorImposto>92.56</valorImposto>
            <valorLiquido>3000.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>12476687000115</documento>
                <nome>J.A.F Administra��o de de Bens e Empreendimentos Imobili�rios</nome>
                <cep></cep>
                <logradouro></logradouro>
                <numero></numero>
                <complemento></complemento>
                <bairro></bairro>
                <estado></estado>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CIODADO DE UMA �RVORE COM PODAS DE CONFORMA��O E DE DESBASTE.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2200.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2200.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG. 0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>YQED.F20G.WO2M.F1LC</senha>
            <numero>190</numero>
            <serie>NF-e</serie>
            <valorTotal>2200.00</valorTotal>
            <valorBase>2200.00</valorBase>
            <valorImposto>67.88</valorImposto>
            <valorLiquido>2200.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>32093130000102</documento>
                <nome>CONDOM�NIO DO EDIF�CIO WASHINGTON MEDEIROS </nome>
                <cep></cep>
                <logradouro>Rua Pereira Nunes </logradouro>
                <numero>232</numero>
                <complemento></complemento>
                <bairro>Vila Isabel</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE UMA FIGUEIRA COM PODA DE REDU��O LATERAL DE COPA.
Atentar para as observa��es no corpo da nota fiscal</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2800.00</valor>
                </item>
            </itens>
            <obs>Em comum acordo com o s�ndico por ter sido a poda da �rvore mais efetiva com redu��o de altura de copa da lateral foi combinado um aditivo de mais R$400,00 para atender a solicita��o de poda que estava fora do radar do escopo do servi�o, s� sendo observado a necessidade do acr�scimo de poda no dia da execu��o do servi�o. O valor inicial de R$2.400,00 + R$400,00 totalizando =R$2.800,00.
Faturamento do residual pode ser por Pix 2197996-9931 ou outra modalidade.</obs>
            <deducoes/>
            <senha>20ML.4OP9.RJPM.FCYV</senha>
            <numero>191</numero>
            <serie>NF-e</serie>
            <valorTotal>2800.00</valorTotal>
            <valorBase>2800.00</valorBase>
            <valorImposto>86.39</valorImposto>
            <valorLiquido>2800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>40864090706</documento>
                <nome>JOSE AUGUSTO FERNANDES QUADRA</nome>
                <cep></cep>
                <logradouro>Avenida Paulo de Frontin</logradouro>
                <numero>559</numero>
                <complemento></complemento>
                <bairro>Rio Comprido</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>CUIDADO DE QUATRO �RVORES NO INTERIOR DA CASA</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>6400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>6400.00</valor>
                </item>
            </itens>
            <obs></obs>
            <deducoes/>
            <senha>2B0H.D5IA.A02J.CXW4</senha>
            <numero>192</numero>
            <serie>NF-e</serie>
            <valorTotal>6400.00</valorTotal>
            <valorBase>6400.00</valorBase>
            <valorImposto>197.46</valorImposto>
            <valorLiquido>6400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>05590655000180</documento>
                <nome>Condom�nio Residencial Joan Mir�</nome>
                <cep>20735-080</cep>
                <logradouro>R. Silva Rabelo</logradouro>
                <numero>154</numero>
                <complemento></complemento>
                <bairro>M�ier</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Poda de duas Mangueiras no interior do condom�nio.
Segunda parcela</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1300.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1300.00</valor>
                </item>
            </itens>
            <obs>Valor Global R$3.900,00.
Parcelado em tr�s presta��es iguais de R$1.300,00.
Conta para dep�sito - Bradesco Ag.0795 Cc 2492 dig 9
Jos� Arthur Rocha Araujo</obs>
            <deducoes/>
            <senha>2Q2L.DYCY.RJN5.QRU6</senha>
            <numero>193</numero>
            <serie>NF-e</serie>
            <valorTotal>1300.00</valorTotal>
            <valorBase>1300.00</valorBase>
            <valorImposto>40.11</valorImposto>
            <valorLiquido>1300.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-16</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>01805011000101</documento>
                <nome>CONDOM�NIO DO EDIF�CIO MARTINS RIBEIRO</nome>
                <cep></cep>
                <logradouro>Rua Martins Ribeiro</logradouro>
                <numero>18</numero>
                <complemento></complemento>
                <bairro>Flamengo</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Servi�o de poda de Palmeiras.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>700.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>700.00</valor>
                </item>
            </itens>
            <obs>Bradesco Ag. 0795 Cc 2492- 9 Jos� Arthur Rocha Araujo
Pix 21 97996-9931</obs>
            <deducoes/>
            <senha>1FNO.O9LI.F54Y.UONS</senha>
            <numero>194</numero>
            <serie>NF-e</serie>
            <valorTotal>700.00</valorTotal>
            <valorBase>700.00</valorBase>
            <valorImposto>21.60</valorImposto>
            <valorLiquido>700.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-18</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>12304609000133</documento>
                <nome>CONDOM�NIO DO EDIF�CIO PLACE VERTE</nome>
                <cep>22280-030</cep>
                <logradouro>R. Dezenove de Fevereiro</logradouro>
                <numero>45</numero>
                <complemento></complemento>
                <bairro>Botafogo</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE LIMPEZA DE FRONDES E FRUTOS DE SETE PALMEIRAS.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2100.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2100.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>M558.ZUT0.4GC4.JNL8</senha>
            <numero>195</numero>
            <serie>NF-e</serie>
            <valorTotal>2100.00</valorTotal>
            <valorBase>2100.00</valorBase>
            <valorImposto>64.79</valorImposto>
            <valorLiquido>2100.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-18</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>01842093000164</documento>
                <nome>CONDOM�NIO DO EDIFICIO AGNES</nome>
                <cep>22470-210</cep>
                <logradouro>R. Frei Leandro</logradouro>
                <numero>99</numero>
                <complemento></complemento>
                <bairro>Lagoa</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SUPRESS�O DE DUAS �RVORES MAIS SERVI�O DE DESPACHANTE.
DESTOCA TOTAL DO RAIZEIRO PARA PLANTIO DE NOVAS MUDAS DE �RVORES.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>14000.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>14000.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG. 0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>26DJ.1VJA.0DNW.8587</senha>
            <numero>196</numero>
            <serie>NF-e</serie>
            <valorTotal>14000.00</valorTotal>
            <valorBase>14000.00</valorBase>
            <valorImposto>431.94</valorImposto>
            <valorLiquido>14000.00</valorLiquido>
            <dataCancelamento>2024-04-18</dataCancelamento>
            <motivoCancelamento>A NOTA FISCAL PRECISA SER SUBSTITUIDA POR DUAS NOTAS COM OS VALORES EM SEPARADO.</motivoCancelamento>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-18</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>39064555000132</documento>
                <nome>CONDOMINIO DO EDIFICIO VALENZA</nome>
                <cep>22470-230</cep>
                <logradouro>R. Cust�dio Serr�o</logradouro>
                <numero>49</numero>
                <complemento></complemento>
                <bairro>Lagoa</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE SUPRESS�O DE UMA AMENDOEIRA GRANDE COM REMO��O DO MATERIAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>6500.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>6500.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG 0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO
PIX 21 979969931</obs>
            <deducoes/>
            <senha>2B42.0IE8.8988.Q5OH</senha>
            <numero>197</numero>
            <serie>NF-e</serie>
            <valorTotal>6500.00</valorTotal>
            <valorBase>6500.00</valorBase>
            <valorImposto>200.54</valorImposto>
            <valorLiquido>6500.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-18</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>27644400000196</documento>
                <nome>MARINA BARRA CLUBE</nome>
                <cep>22611-201</cep>
                <logradouro>Estrada da Barra da Tijuca</logradouro>
                <numero>777</numero>
                <complemento></complemento>
                <bairro>Barra da Tijuca</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE ALAMEDAS DE ALGODOEIRO DA PRAIA COM LIMPEZA E RALEAMENTO DE GALHOS PARA ILUMINA��O DAS �REAS DE ESTACIONAMENTO.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2800.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>2I69.C92T.3URL.8E7P</senha>
            <numero>198</numero>
            <serie>NF-e</serie>
            <valorTotal>2800.00</valorTotal>
            <valorBase>2800.00</valorBase>
            <valorImposto>86.39</valorImposto>
            <valorLiquido>2800.00</valorLiquido>
            <dataCancelamento>2024-04-18</dataCancelamento>
            <motivoCancelamento>VALOR DA PROPOSTA ERRADO</motivoCancelamento>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-18</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>01842093000164</documento>
                <nome>CONDOM�NIO DO EDIFICIO AGNES</nome>
                <cep>22470-210</cep>
                <logradouro>R. Frei Leandro</logradouro>
                <numero>99</numero>
                <complemento></complemento>
                <bairro>Lagoa</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE SUPRESS�O DE DUAS �RVORES DA ESP�CIE PAINEIRA DA CAL�ADA E SERVI�O DE DESPACHANTE PARA AUTORIZA��O DE SUPRESS�O DE �RVORE DE LOGRADOURO P�BLICO.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>5600.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>5600.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG. 0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>2VA5.1SUW.M3X0.ZL62</senha>
            <numero>199</numero>
            <serie>NF-e</serie>
            <valorTotal>5600.00</valorTotal>
            <valorBase>5600.00</valorBase>
            <valorImposto>172.78</valorImposto>
            <valorLiquido>5600.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-18</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>01842093000164</documento>
                <nome>CONDOM�NIO DO EDIFICIO AGNES</nome>
                <cep>22470-210</cep>
                <logradouro>R. Frei Leandro</logradouro>
                <numero>99</numero>
                <complemento></complemento>
                <bairro>Lagoa</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE DESTOCA DO RAIZEIRO DAS DUAS �RVORES DA ESP�CIE PAINEIRA E REMO��O DO MATERIAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>8400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>8400.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>12KE.W91M.CRVY.HII5</senha>
            <numero>200</numero>
            <serie>NF-e</serie>
            <valorTotal>8400.00</valorTotal>
            <valorBase>8400.00</valorBase>
            <valorImposto>259.16</valorImposto>
            <valorLiquido>8400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-18</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>27644400000196</documento>
                <nome>MARINA BARRA CLUBE</nome>
                <cep>22611-201</cep>
                <logradouro>estrada da Barra da Tijuca</logradouro>
                <numero>777</numero>
                <complemento></complemento>
                <bairro>Barra da Tijuca</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE ALAMEDAS DE ALGODOEIROS DA PRAIA COM LIMPEZA E RALEAMENTO DE GALHOS PARA ILUMINA��O DAS �REAS DE ESTACIONAMENTO.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2900.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2900.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG. 0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO
PIX 2197996-9931</obs>
            <deducoes/>
            <senha>25J6.QX7T.FFUP.GDH4</senha>
            <numero>201</numero>
            <serie>NF-e</serie>
            <valorTotal>2900.00</valorTotal>
            <valorBase>2900.00</valorBase>
            <valorImposto>89.47</valorImposto>
            <valorLiquido>2900.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-24</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>73950032000121</documento>
                <nome>CONDOM�NIO DO EDIF�CIO VERMON</nome>
                <cep>22471-004</cep>
                <logradouro>Av. Epit�cio Pessoa</logradouro>
                <numero>4344</numero>
                <complemento></complemento>
                <bairro>Lagoa</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE TR�S �RVORES COMPODA DE REDU��O LATERAL DE COPA PARA O LADO DA EDIFICA��O.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2700.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2700.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>CGUZ.BSJ3.5VV4.6Z03</senha>
            <numero>202</numero>
            <serie>NF-e</serie>
            <valorTotal>2700.00</valorTotal>
            <valorBase>2700.00</valorBase>
            <valorImposto>83.30</valorImposto>
            <valorLiquido>2700.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-04-25</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0308527100</aliquota>
            <prestador>
                <documento>24039772000103</documento>
                <nome>JOSE ARTHUR ROCHA ARAUJO - ME</nome>
                <cep>37464000</cep>
                <logradouro>R. ENG� PAULO FRANCO DA ROSA</logradouro>
                <numero>165</numero>
                <bairro>CENTRO</bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <telefone>35-99864-9760</telefone>
                <email>podacarioca@gmail.com</email>
            </prestador>
            <regime>Simples</regime>
            <tomador>
                <documento>40206815000146</documento>
                <nome>CONDOM�NIO RECREIO DAS CANOAS</nome>
                <cep>22610-210</cep>
                <logradouro>Estrada das Canoas</logradouro>
                <numero>722</numero>
                <complemento></complemento>
                <bairro>S�o Conrado</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>1- Servi�o de cuidado de cinco �rvores com podas laterais no pr�dio da administra��o do condom�nio e poda de redu��o de copa circular de uma Mangueira;
2 - Servi�o de cuidado de aproximadamente trinta �rvores ao redor do estacionamento dos blocos do condom�nio.
Retirada de galhos mortos das �rvores do estacionamento.
Reciclagem do material das podas para dentro das �reas determinadas.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>6500.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>6500.00</valor>
                </item>
            </itens>
            <obs>Valor Global R$16.500; sendo a primeira parcela de R$6.500,00 e as duas outras parcelas de valor igual a R$5.000,00.
Bradesco Ag. 0795 Cc 2492 dig 9 Jos� Arthur Rocha Araujo
Pix 21979969931</obs>
            <deducoes/>
            <senha>2PF0.VB37.BNR4.2J9O</senha>
            <numero>203</numero>
            <serie>NF-e</serie>
            <valorTotal>6500.00</valorTotal>
            <valorBase>6500.00</valorBase>
            <valorImposto>200.54</valorImposto>
            <valorLiquido>6500.00</valorLiquido>
        </nf-e>
    </emissao>
`;
//Parse do xml
const xmlDocument = parse(xmlString)

//Arrays para armazenar os valores
const datas = []
const numeros = []
const valores = []
const clientes = []
const valorTotal = []


//Metodo para percorrer o arquivo e armazenar os dados nos arrays
const nfs = xmlDocument.querySelectorAll("nf-e")
const tomador = xmlDocument.querySelector("tomador")
for(const nf of nfs){
    //Datas
    const data = nf.getElementsByTagName("prestacao")[0].text
    datas.push(data)

    //Numeros
    const numero = nf.getElementsByTagName("numero")[2].text
        numeros.push(numero)

    //Valores
    const valor = nf.getElementsByTagName("valorTotal")[0].text
    valores.push(valor)

    //Clientes
    const cliente = nf.getElementsByTagName("nome")[1].text
    clientes.push(cliente)
}

//Formata as datas
const dataFormatada = []
function formataData(datasParam){
    for(let i=0; i<datas.length; i++){
        let dataI = datasParam[i]
        let formatData = dataI.split("-")
        dataFormatada.push(formatData[2] + "/" + formatData[1] + "/" + formatData[0])
    }
}
formataData(datas)

//Soma de todos os valores
function somarTotal(){
    let somaTotal = 0
    for(let i=0; i<valores.length; i++){
        somaTotal += parseInt(valores[i])
    }
    return somaTotal
}
somarTotal()
const soma = somarTotal()
const joao = soma*0.03


export { dataFormatada, numeros, valores, clientes, soma, joao }