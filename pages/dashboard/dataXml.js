
import { parse } from 'node-html-parser'

const xmlString = `
<GovDigital>
    <emissao>
        <nf-e>
            <prestacao>2024-01-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>92682038000100</documento>
                <nome>BRADESCO SAUDE S/A</nome>
                <cep>20931-75</cep>
                <logradouro>Av. Rio de Janeiro</logradouro>
                <numero>555</numero>
                <complemento></complemento>
                <bairro>CAJU</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email>liliane.almeida@bradescoseguros.com.br</email>
                <inscEst>ISENTO</inscEst>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>RFI ? CLU ? CONTRATA��O COM LEGALIZA��O PARA REMO��O DE �RVORE MORTA NO CLUBE RJ; PISTA DE ATLETISMO.
1-Supress�o de uma Mangueira morta pelo besouro da seca da Mangueira. Remo��o
do material e limpeza do local.
2-Servi�o de despachante para dar entrada e acompanhar o processo at� o
deferimento junto ao �rg�o p�blico Funda��o Parques e Jardins. </descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1479.630000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1479.63</valor>
                </item>
            </itens>
            <obs>Ref.: Pedido de Compra n�. 3100437871
Bradesco Ag. 0795 Cc 2492 Dig 9</obs>
            <deducoes/>
            <senha>2218.5AV5.E9L0.17JD</senha>
            <numero>148</numero>
            <serie>NF-e</serie>
            <valorTotal>1479.63</valorTotal>
            <valorBase>1479.63</valorBase>
            <valorImposto>45.65</valorImposto>
            <valorLiquido>1479.63</valorLiquido>
            <dataCancelamento>2024-01-12</dataCancelamento>
            <motivoCancelamento>Substitu�da pela nota n� 151: Erro na Raz�o Social</motivoCancelamento>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>92693118000160</documento>
                <nome>BRADESCO SAUDE S/A</nome>
                <cep>20931--675</cep>
                <logradouro>Av. Rio de Janeiro</logradouro>
                <numero>555</numero>
                <complemento></complemento>
                <bairro>Caju</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email>liliane.almeida@bradescoseguros.com.br</email>
                <inscEst>ISENTO</inscEst>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>RFI - CLU - CONTRATA��O COM LEGALIZA��O PARA REMO��O DE
�RVORE MORTA NO CLUBE RJ; PISTA DE ATLETISMO.
1-Supress�o de uma Mangueira morta pelo besouro da seca da Mangueira.
Remo��o do material e limpeza do local.
2-Servi�o de despachante para dar entrada e acompanhar o processo at� o deferimento junto ao �rg�o p�blico Funda��o Parques e Jardins.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>3043.040000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>3043.04</valor>
                </item>
            </itens>
            <obs>Ref.: Pedido de Compra n�. 3100437871
Bradesco Ag. 0795 Cc 2492 Dig 9</obs>
            <deducoes/>
            <senha>33T7.Q0VB.3U7R.4KQA</senha>
            <numero>149</numero>
            <serie>NF-e</serie>
            <valorTotal>3043.04</valorTotal>
            <valorBase>3043.04</valorBase>
            <valorImposto>93.89</valorImposto>
            <valorLiquido>3043.04</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.16</atividade>
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
                <documento>33055146014496</documento>
                <nome>BRADESCO SEGUROS S/A</nome>
                <cep>20261-901</cep>
                <logradouro>Avenida Rio de Janeiro</logradouro>
                <numero>555</numero>
                <complemento></complemento>
                <bairro>Caju</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.16</atividade>
                    <descricao>RFI - CLU - CONTRATA��O COM LEGALIZA��O PARA REMO��O DE
�RVORE MORTA NO CLUBE RJ; PISTA DE ATLETISMO.
1-Supress�o de uma Mangueira morta pelo besouro da seca da Mangueira.
Remo��o do material e limpeza do local.
2-Servi�o de despachante para dar entrada e acompanhar o processo at� o deferimento junto ao �rg�o p�blico Funda��o Parques e Jardins.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2127.330000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2127.33</valor>
                </item>
            </itens>
            <obs>Ref.: Pedido de Compra n�. 3100437871
Bradesco Ag. 0795 Cc 2492 Dig 9</obs>
            <deducoes/>
            <senha>KL0E.GZQ3.YC0Q.4LBL</senha>
            <numero>150</numero>
            <serie>NF-e</serie>
            <valorTotal>2127.33</valorTotal>
            <valorBase>2127.33</valorBase>
            <valorImposto>65.63</valorImposto>
            <valorLiquido>2127.33</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-11</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>92682038000100</documento>
                <nome>BRADESCO SAUDE S/A</nome>
                <cep>2093175</cep>
                <logradouro>Av. Rio de Janeiro</logradouro>
                <numero>555</numero>
                <complemento></complemento>
                <bairro>CAJU</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email>liliane.almeida@bradescoseguros.com.br</email>
                <inscEst>ISENTO</inscEst>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>RFI ? CLU ? CONTRATA��O COM LEGALIZA��O PARA REMO��O DE �RVORE MORTA NO CLUBE RJ; PISTA DE ATLETISMO.
1-Supress�o de uma Mangueira morta pelo besouro da seca da Mangueira. Remo��o
do material e limpeza do local.
2-Servi�o de despachante para dar entrada e acompanhar o processo at� o
deferimento junto ao �rg�o p�blico Funda��o Parques e Jardins. </descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1479.630000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1479.63</valor>
                </item>
            </itens>
            <obs>Nota fiscal emitida em substitui��o � nota 148/ELETRONICA.
------------------------------------------------------
Ref.: Pedido de Compra n�. 3100437871
Bradesco Ag. 0795 Cc 2492 Dig 9</obs>
            <deducoes/>
            <senha>2LOZ.XCG0.WE56.BA3U</senha>
            <numero>151</numero>
            <serie>NF-e</serie>
            <valorTotal>1479.63</valorTotal>
            <valorBase>1479.63</valorBase>
            <valorImposto>45.65</valorImposto>
            <valorLiquido>1479.63</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-15</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>09425737000120</documento>
                <nome>MGC BRASIL CONSTRU��ES E SERVI�OS LTDA</nome>
                <cep>20040---004</cep>
                <logradouro>Av. Rio Branco</logradouro>
                <numero>115</numero>
                <complemento>SALA 2001</complemento>
                <bairro>Centro</bairro>
                <estado></estado>
                <pais>Brasil</pais>
                <email>financeiro@mgcbrasil.com.br</email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>Servi�o de cuidado de uma �rvore com  poda de raleamento e conforma��o de copa.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1500.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1500.00</valor>
                </item>
            </itens>
            <obs>Refer�ncia - RJPNH10
BRADESCO AG.0795 CC 2492 DIG 9</obs>
            <deducoes/>
            <senha>2B0C.9ILR.VBZF.IA1W</senha>
            <numero>152</numero>
            <serie>NF-e</serie>
            <valorTotal>1500.00</valorTotal>
            <valorBase>1500.00</valorBase>
            <valorImposto>46.28</valorImposto>
            <valorLiquido>1500.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-15</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>09425737000120</documento>
                <nome>MGC BRASIL CONSTRU��ES E SERVI�OS LTDA</nome>
                <cep>20040-004</cep>
                <logradouro>Av. Rio Branco</logradouro>
                <numero>115</numero>
                <complemento>SALA 2001</complemento>
                <bairro>Centro</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email>financeiro@mgcbrasil.com.br</email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>SERVI�O DE CUIDADO DE �RVORE COM PODA DE RALEAMENTO E CONFORMA��O.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1500.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1500.00</valor>
                </item>
            </itens>
            <obs>SITE: RJRCP11
BRADESCO AG 0795 CC 2492 DIG 9 OU PIX 21979969931 - JOS� ARTHUR ROCHA ARAUJO</obs>
            <deducoes/>
            <senha>M671.NBTN.4QDZ.8W19</senha>
            <numero>153</numero>
            <serie>NF-e</serie>
            <valorTotal>1500.00</valorTotal>
            <valorBase>1500.00</valorBase>
            <valorImposto>46.28</valorImposto>
            <valorLiquido>1500.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-15</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>17128724000118</documento>
                <nome>Condom�nio do Edif�cio Rossi Parque Laranjeiras</nome>
                <cep>24000-</cep>
                <logradouro>R. PINHEIRO MACHADO N PAL GUANABAR</logradouro>
                <numero>22</numero>
                <complemento></complemento>
                <bairro>LARANJEIRAS</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>PODA DE �RVORES COM PODA DE DESBASTE E CONFORMA��O.
REMO��O DO MATERIAL E LIMPEZA DO LOCAL</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>3000.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>3000.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 OU PIX 2197996-9931 - Jos� Arthur Rocha Araujo
Duas parcelas iguais de R$3.000,00 sendo uma em janeiro e a outra em fevereiro.</obs>
            <deducoes/>
            <senha>DJOT.809H.VSNF.JSWN</senha>
            <numero>154</numero>
            <serie>NF-e</serie>
            <valorTotal>3000.00</valorTotal>
            <valorBase>3000.00</valorBase>
            <valorImposto>92.56</valorImposto>
            <valorLiquido>3000.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-18</prestacao>
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
                <documento>68638691000197</documento>
                <nome>CONDOM�NIO FONTE DA SAUDADE</nome>
                <cep>22471---210</cep>
                <logradouro>R. Fonte da Saudade</logradouro>
                <numero>47</numero>
                <complemento></complemento>
                <bairro>Lagoa</bairro>
                <estado></estado>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>CUIDADO DE UMA �RVORE DA ESP�CIE ABACATEIRO COM PODA DE RALEAMENTO E CONFORMA��O LATERAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1800.00</valor>
                </item>
            </itens>
            <obs></obs>
            <deducoes/>
            <senha>1BCH.7V6I.BN0D.BOLH</senha>
            <numero>155</numero>
            <serie>NF-e</serie>
            <valorTotal>1800.00</valorTotal>
            <valorBase>1800.00</valorBase>
            <valorImposto>55.53</valorImposto>
            <valorLiquido>1800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-22</prestacao>
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
                <documento>03938996000179</documento>
                <nome>SARAPUI PRODUCOES ARTISTICAS LTDA</nome>
                <cep></cep>
                <logradouro></logradouro>
                <numero></numero>
                <complemento></complemento>
                <bairro></bairro>
                <estado>MG</estado>
                <municipio>Itanhandu</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE UMA �RVORE DA ESP�CIE JAQUEIRA COM PODA DE DESBASTE E RETIRADA DE FRUTOS.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2800.00</valor>
                </item>
            </itens>
            <obs>BRADESCO - AG. 0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO OU PIX 21979969931</obs>
            <deducoes/>
            <senha>GDLR.PBGI.RYD2.5OYK</senha>
            <numero>156</numero>
            <serie>NF-e</serie>
            <valorTotal>2800.00</valorTotal>
            <valorBase>2800.00</valorBase>
            <valorImposto>86.39</valorImposto>
            <valorLiquido>2800.00</valorLiquido>
            <dataCancelamento>2024-01-22</dataCancelamento>
            <motivoCancelamento>Substitu�da pela nota n� 157: ERRO NO ENDERE�O DO CLIENTE</motivoCancelamento>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-22</prestacao>
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
                <documento>03938996000179</documento>
                <nome>SARAPUI PRODUCOES ARTISTICAS LTDA</nome>
                <cep></cep>
                <logradouro>Rua Sarapu�</logradouro>
                <numero>8</numero>
                <complemento>casa</complemento>
                <bairro>humait�</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE UMA �RVORE DA ESP�CIE JAQUEIRA COM PODA DE DESBASTE E RETIRADA DE FRUTOS.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2800.00</valor>
                </item>
            </itens>
            <obs>Nota fiscal emitida em substitui��o � nota 156/ELETRONICA.
------------------------------------------------------
BRADESCO - AG. 0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO OU PIX 21979969931</obs>
            <deducoes/>
            <senha>19NI.RILK.7DWP.T0CS</senha>
            <numero>157</numero>
            <serie>NF-e</serie>
            <valorTotal>2800.00</valorTotal>
            <valorBase>2800.00</valorBase>
            <valorImposto>86.39</valorImposto>
            <valorLiquido>2800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-22</prestacao>
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
                <documento>07528125000138</documento>
                <nome>GAYLUSSAC EMPREENDIMENTOS EDUCACIONAIS LTDA</nome>
                <cep>24365-060</cep>
                <logradouro>R. Coronel Jo�o Brand�o</logradouro>
                <numero>95</numero>
                <complemento></complemento>
                <bairro>S�o Francisco</bairro>
                <estado>RJ</estado>
                <municipio>Niter�i</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE DUAS �RVORES DA ESP�CIE MANGUEIRA COM PODA DE RALEAMENTO E CONFORMA��O.
REMO��O DO MATERIAL E LIMPEZA DO LOCAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2400.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG 0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO OU PIX 21-97996-9931</obs>
            <deducoes/>
            <senha>1MKZ.GU34.JR0P.394P</senha>
            <numero>158</numero>
            <serie>NF-e</serie>
            <valorTotal>2400.00</valorTotal>
            <valorBase>2400.00</valorBase>
            <valorImposto>74.05</valorImposto>
            <valorLiquido>2400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-22</prestacao>
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
                <documento>33055146014496</documento>
                <nome>BRADESCO SEGUROS S/A</nome>
                <cep>20931-675</cep>
                <logradouro>Av. Rio de Janeiro</logradouro>
                <numero>555</numero>
                <complemento></complemento>
                <bairro>Caju</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Retirada de �rvore na entrada da pista de atletismo e Poda de �rvores bifurcadas no meio (2 unidades</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>3183.010000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>3183.01</valor>
                </item>
            </itens>
            <obs>BRADESCO AG 0795 CC 2492-9</obs>
            <deducoes/>
            <senha>1KOG.CJU5.RWO6.WXBY</senha>
            <numero>159</numero>
            <serie>NF-e</serie>
            <valorTotal>3183.01</valorTotal>
            <valorBase>3183.01</valorBase>
            <valorImposto>98.20</valorImposto>
            <valorLiquido>3183.01</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-22</prestacao>
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
                <documento>92682038000100</documento>
                <nome>BRADESCO SAUDE S/A</nome>
                <cep>20931-675</cep>
                <logradouro>Av. Rio de Janeiro</logradouro>
                <numero>555</numero>
                <complemento></complemento>
                <bairro>Caju</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email>liliane.almeida@bradescoseguros.com.br</email>
                <inscEst>ISENTO</inscEst>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Retirada de �rvore na entrada da pista de atletismo e Poda de �rvores bifurcadas no meio (2 unidades)</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2213.880000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2213.88</valor>
                </item>
            </itens>
            <obs>BRADESCO AG 0795 CC 2492-9</obs>
            <deducoes/>
            <senha>2TVF.YN6K.PV1Q.03TP</senha>
            <numero>160</numero>
            <serie>NF-e</serie>
            <valorTotal>2213.88</valorTotal>
            <valorBase>2213.88</valorBase>
            <valorImposto>68.30</valorImposto>
            <valorLiquido>2213.88</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-22</prestacao>
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
                <documento>92693118000160</documento>
                <nome>BRADESCO SAUDE S/A</nome>
                <cep>20931-675</cep>
                <logradouro>Av. Rio de Janeiro</logradouro>
                <numero>555</numero>
                <complemento>3� ANDAR </complemento>
                <bairro>Caju</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email>liliane.almeida@bradescoseguros.com.br</email>
                <inscEst>ISENTO</inscEst>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Retirada de �rvore na entrada da pista de atletismo e Poda de �rvores bifurcadas no meio (2 unidades)</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>4553.120000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>4553.12</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492-9 JOS� ARTHUR ROCHA ARAUJO</obs>
            <deducoes/>
            <senha>RVFD.4MGQ.VLW7.2ICD</senha>
            <numero>161</numero>
            <serie>NF-e</serie>
            <valorTotal>4553.12</valorTotal>
            <valorBase>4553.12</valorBase>
            <valorImposto>140.48</valorImposto>
            <valorLiquido>4553.12</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-30</prestacao>
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
                <documento>00059311000207</documento>
                <nome>FUNDA��O NACIONAL DO INDIO</nome>
                <cep>21675-930</cep>
                <logradouro>R. das Palmeiras</logradouro>
                <numero>55</numero>
                <complemento></complemento>
                <bairro>BOTAFOGO</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>PODA DE EMERG�NCIA
SERVI�O DE CUIDADO DE UMA FRUTA P�O COM PODA DE LIMPEZA E
RETIRADA DE FRUTOS PARA SEGURAN�A DOS TRANSEUNTES.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1950.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1950.00</valor>
                </item>
            </itens>
            <obs>CONTRATO 245 - 2022
SERVI�O REALIZADO NO PER�ODO DE 02 A 03 DE OUTUBRO DO ANO DE 2023.
BRADESCO AG 0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO</obs>
            <deducoes/>
            <senha>24V5.LDJI.9GUP.V3XR</senha>
            <numero>162</numero>
            <serie>NF-e</serie>
            <valorTotal>1950.00</valorTotal>
            <valorBase>1950.00</valorBase>
            <valorImposto>60.16</valorImposto>
            <valorLiquido>1950.00</valorLiquido>
            <dataCancelamento>2024-01-30</dataCancelamento>
            <motivoCancelamento>Substitu�da pela nota n� 163: ERRO DE DIGITA��O NA DATA DO SERVI�O.</motivoCancelamento>
        </nf-e>
        <nf-e>
            <prestacao>2024-01-30</prestacao>
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
                <documento>00059311000207</documento>
                <nome>FUNDA��O NACIONAL DO INDIO</nome>
                <cep>21675930</cep>
                <logradouro>R. das Palmeiras</logradouro>
                <numero>55</numero>
                <complemento></complemento>
                <bairro>BOTAFOGO</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>PODA DE EMERG�NCIA
SERVI�O DE CUIDADO DE UMA FRUTA P�O COM PODA DE LIMPEZA E
RETIRADA DE FRUTOS PARA SEGURAN�A DOS TRANSEUNTES.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1950.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1950.00</valor>
                </item>
            </itens>
            <obs>Nota fiscal emitida em substitui��o � nota 162/ELETRONICA.
------------------------------------------------------
CONTRATO 245 - 2022
SERVI�O REALIZADO NO DIA 26 DE JANEIRO DO ANO DE 2024.
BRADESCO AG 0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO</obs>
            <deducoes/>
            <senha>1SMD.OWW1.P6WS.PH24</senha>
            <numero>163</numero>
            <serie>NF-e</serie>
            <valorTotal>1950.00</valorTotal>
            <valorBase>1950.00</valorBase>
            <valorImposto>60.16</valorImposto>
            <valorLiquido>1950.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-02-09</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>15593506000129</documento>
                <nome>SACOPA RIO SPE EMPREENDIMENTO IMOBILI�RIO LTDA</nome>
                <cep>22431-050</cep>
                <logradouro>R. Dias Ferreira</logradouro>
                <numero>190</numero>
                <complemento>SALA 601</complemento>
                <bairro>Leblon</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>Poda de redu��o de copa da �rvore grande tomada por cip�s na entrada do terreno. Incluindo servi�o de despachante para supress�o da �rvore.

Podar, cortar e manejar indiv�duos arb�reos, ?�rvores? ou ?vegeta��o?, localizadas em diferentes pontos no terreno da Rua Sacop� s/n; Fonte da Saudade ? RJ. 

Limpeza dos locais ap�s a realiza��o dos servi�os com picotamento e acondicionamento da fitomassa de forma a servir de barreira contra ao escoamento veloz da �gua da chuva.
</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>8400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>8400.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG 0795  - CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO OU
PIX 21 979969931
</obs>
            <deducoes/>
            <senha>120D.J1AN.TWFY.2LU2</senha>
            <numero>164</numero>
            <serie>NF-e</serie>
            <valorTotal>8400.00</valorTotal>
            <valorBase>8400.00</valorBase>
            <valorImposto>259.16</valorImposto>
            <valorLiquido>8400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-02-09</prestacao>
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
                <documento>93352611734</documento>
                <nome>LUCI HERDY</nome>
                <cep></cep>
                <logradouro>RUA MARIA JOSE</logradouro>
                <numero>613</numero>
                <complemento>TODAS AS CASAS DA VILA</complemento>
                <bairro>MADUREIRA</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>CUIDADO DE QUATRO �RVORES DA ESP�CIE FIGUEIRA COM PODA DE LIMPEZA E CONFORMA��O. REMO��O DO MATERIAL E LIMPEZA DO LOCAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2400.00</valor>
                </item>
            </itens>
            <obs></obs>
            <deducoes/>
            <senha>WSMY.72D3.I1CU.0SOY</senha>
            <numero>165</numero>
            <serie>NF-e</serie>
            <valorTotal>2400.00</valorTotal>
            <valorBase>2400.00</valorBase>
            <valorImposto>74.05</valorImposto>
            <valorLiquido>2400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-02-16</prestacao>
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
                <documento>17128724000118</documento>
                <nome>Condom�nio do Edif�cio Rossi Parque Laranjeiras</nome>
                <cep></cep>
                <logradouro>R. PINHEIRO MACHADO </logradouro>
                <numero>22</numero>
                <complemento></complemento>
                <bairro>LARANJEIRAS</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>PODA DE �RVORES COM PODA DE DESBASTE E CONFORMA��O.
REMO��O DO MATERIAL E LIMPEZA DO LOCAL</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>3000.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>3000.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 OU PIX 2197996-9931 - Jos� Arthur Rocha Araujo
Duas parcelas iguais de R$3.000,00 sendo esta a segunda parcela.</obs>
            <deducoes/>
            <senha>U4H6.7OCW.MUO6.PU8S</senha>
            <numero>166</numero>
            <serie>NF-e</serie>
            <valorTotal>3000.00</valorTotal>
            <valorBase>3000.00</valorBase>
            <valorImposto>92.56</valorImposto>
            <valorLiquido>3000.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-02-20</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.10</atividade>
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
                <documento>05045812000177</documento>
                <nome> CONDOMINIO DO EDIFICIO RESIDENCIAL SILVA ARAUJO</nome>
                <cep>20735-230</cep>
                <logradouro>R. Paulo Silva Ara�jo</logradouro>
                <numero>201</numero>
                <complemento></complemento>
                <bairro>M�ier</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.10</atividade>
                    <descricao>Cuidado de uma Mangueira com poda lateral completa para o lado da quadra.
Remo��o do material ou picotamento total para decomposi��o no local.
Servi�o de limpeza do terreno com aproximadamente 1.200 metros quadrados.
</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2400.00</valor>
                </item>
            </itens>
            <obs>Primeira parcela de duas de igual valor - R$2.400,00 - Fevereiro e Mar�o.
Bradesco - Ag 0795 Cc 2492 dig 9</obs>
            <deducoes/>
            <senha>BTBW.GLW9.7A3U.B6XB</senha>
            <numero>167</numero>
            <serie>NF-e</serie>
            <valorTotal>2400.00</valorTotal>
            <valorBase>2400.00</valorBase>
            <valorImposto>74.05</valorImposto>
            <valorLiquido>2400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-02-20</prestacao>
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
                <documento>05045812000177</documento>
                <nome> CONDOMINIO DO EDIFICIO RESIDENCIAL SILVA ARAUJO</nome>
                <cep>20735-230</cep>
                <logradouro>R. Paulo Silva Ara�jo</logradouro>
                <numero>201</numero>
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
                    <descricao>Cuidado de uma Mangueira com poda lateral completa para o lado da quadra.
Remo��o do material ou picotamento total para decomposi��o no local.
Servi�o de limpeza do terreno com aproximadamente 1.200 metros quadrados.
</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2400.00</valor>
                </item>
            </itens>
            <obs>Segunda e �ltima parcela m�s de mar�o.
Bradesco Ag 0795 Cc 2492 dig 9 Jos� Arthur Rocha Araujo</obs>
            <deducoes/>
            <senha>13AO.R6S2.5YKD.DHT2</senha>
            <numero>168</numero>
            <serie>NF-e</serie>
            <valorTotal>2400.00</valorTotal>
            <valorBase>2400.00</valorBase>
            <valorImposto>74.05</valorImposto>
            <valorLiquido>2400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-02-29</prestacao>
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
PRIMEIRA PARCELA</descricao>
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
            <senha>2AV3.1CWN.N3L0.UWTE</senha>
            <numero>169</numero>
            <serie>NF-e</serie>
            <valorTotal>1300.00</valorTotal>
            <valorBase>1300.00</valorBase>
            <valorImposto>40.11</valorImposto>
            <valorLiquido>1300.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-04</prestacao>
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
                <documento>28249407000176</documento>
                <nome>CONDOM�NIO DO EDIF�CIO CAP FERRAT</nome>
                <cep>22420-006</cep>
                <logradouro>Av. Vieira Souto</logradouro>
                <numero>564</numero>
                <complemento></complemento>
                <bairro>Ipanema</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE PODA PARA VISTA DE OITO ALGODOEIROS DA PRAIA.
REMO��O DO MATERIAL E LIMPEZA DO LOCAL</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>3800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>3800.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG 0795 CC 2492-DIG 9 JOS� ARTHUR ROCHA ARAUJO,
PIX 21979969931</obs>
            <deducoes/>
            <senha>MT66.IH52.90GV.JL4D</senha>
            <numero>170</numero>
            <serie>NF-e</serie>
            <valorTotal>3800.00</valorTotal>
            <valorBase>3800.00</valorBase>
            <valorImposto>117.24</valorImposto>
            <valorLiquido>3800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-05</prestacao>
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
                <documento>03937188000197</documento>
                <nome>CONSELHO REGIONAL DOS DESPACHANTES DOCUMENTALISTAS DO ESTADO DO RIO DE JANEIRO</nome>
                <cep>20941-070</cep>
                <logradouro>Av. Pedro II</logradouro>
                <numero>311</numero>
                <complemento></complemento>
                <bairro>S�o Crist�v�o</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE UMA FIGUEIRA COM PODA DE REDU��O DE COPA LATERAL E LAVANTAMENTO DE COPA. REMO��O DO MATERIAL E LIMPEZA DO LOCAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>2200.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>2200.00</valor>
                </item>
            </itens>
            <obs>BRADESCO - AG.0795 CC 2492-9
PIX 21-979969931 JOS� ARTHUR ROCHA ARAUJO</obs>
            <deducoes/>
            <senha>1H7I.67M7.L73S.WRDA</senha>
            <numero>171</numero>
            <serie>NF-e</serie>
            <valorTotal>2200.00</valorTotal>
            <valorBase>2200.00</valorBase>
            <valorImposto>67.88</valorImposto>
            <valorLiquido>2200.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-13</prestacao>
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
                <documento>00973749001430</documento>
                <nome>TOP SERVICE SERVICOS E SISTEMAS S/A</nome>
                <cep>20921-440</cep>
                <logradouro>campo S�o Crist�v�o</logradouro>
                <numero>220</numero>
                <complemento></complemento>
                <bairro>S�o Crist�v�o</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE CUIDADO DE UMA FIGUEIRA GRANDE E CINCO AMENDOEIRAS DENTRO DA �REA INTERNA DA EMPRESA. PODAS DE DESBASTE E CONFORMA��O DE COPA.
REMO��O DO MATERAILA E LIMPEZA DO LOCAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>7900.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>7900.00</valor>
                </item>
            </itens>
            <obs>FATURAMENTO: BRADESCO AG.0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO OU PIX 21-79969931
CONTRATO :15396</obs>
            <deducoes/>
            <senha>33V7.M3JE.J1W9.ETO5</senha>
            <numero>172</numero>
            <serie>NF-e</serie>
            <valorTotal>7900.00</valorTotal>
            <valorBase>7900.00</valorBase>
            <valorImposto>243.74</valorImposto>
            <valorLiquido>7900.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-14</prestacao>
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
                <documento>08873525000305</documento>
                <nome>MANANCIAIS - FILIAL TAQUARA</nome>
                <cep></cep>
                <logradouro>Rua Conego Felipe</logradouro>
                <numero>191</numero>
                <complemento></complemento>
                <bairro>taquara</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Poda de uma �rvore no interior da �rea.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>630.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>630.00</valor>
                </item>
            </itens>
            <obs>Pix 21979969931 Jos� Arthur Rocha Araujo</obs>
            <deducoes/>
            <senha>LG2P.66CE.QY8Q.04OC</senha>
            <numero>173</numero>
            <serie>NF-e</serie>
            <valorTotal>630.00</valorTotal>
            <valorBase>630.00</valorBase>
            <valorImposto>19.44</valorImposto>
            <valorLiquido>630.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-18</prestacao>
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
                <documento>28249183000100</documento>
                <nome>Condom�nio Jardim Nova Barra</nome>
                <cep></cep>
                <logradouro>Av. das Am�ricas</logradouro>
                <numero>2678</numero>
                <complemento></complemento>
                <bairro>Barra</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Servi�o de poda de dez �rvores no interior do condom�nio.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1500.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1500.00</valor>
                </item>
            </itens>
            <obs></obs>
            <deducoes/>
            <senha>BN1N.EZ7P.9CN2.YHEB</senha>
            <numero>174</numero>
            <serie>NF-e</serie>
            <valorTotal>1500.00</valorTotal>
            <valorBase>1500.00</valorBase>
            <valorImposto>46.28</valorImposto>
            <valorLiquido>1500.00</valorLiquido>
            <dataCancelamento>2024-03-19</dataCancelamento>
            <motivoCancelamento>Erro no preenchimento do valor da nota fiscal</motivoCancelamento>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-18</prestacao>
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
                <documento>35919927000104</documento>
                <nome>J.F Brito</nome>
                <cep></cep>
                <logradouro>Rua Carlos de Carvalho</logradouro>
                <numero>45</numero>
                <complemento></complemento>
                <bairro>Centro</bairro>
                <estado></estado>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE REMO��O DE MATERIAL DE RES�DUO DE  DE RESTAURA��O DE CASA.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>800.00</valor>
                </item>
            </itens>
            <obs></obs>
            <deducoes/>
            <senha>2HJ9.H78H.E9DQ.BPKN</senha>
            <numero>175</numero>
            <serie>NF-e</serie>
            <valorTotal>800.00</valorTotal>
            <valorBase>800.00</valorBase>
            <valorImposto>24.68</valorImposto>
            <valorLiquido>800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-19</prestacao>
            <exigibilidade>1</exigibilidade>
            <retido>2</retido>
            <municipioIncidencia>3304557</municipioIncidencia>
            <atividade>7.11</atividade>
            <aliquota>0.0000000000</aliquota>
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
                <documento>28249183000100</documento>
                <nome>Condom�nio Jardim Nova Barra</nome>
                <cep></cep>
                <logradouro>Av. DAS AMERICAS</logradouro>
                <numero>2678</numero>
                <complemento></complemento>
                <bairro>Barra</bairro>
                <estado></estado>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Cuidado de poda de dez �rvores no interior do condom�nio.</descricao>
                    <aliquota>0.0000000000</aliquota>
                    <valorUn>4000.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>4000.00</valor>
                </item>
            </itens>
            <obs></obs>
            <deducoes/>
            <senha>Q7PY.QOD2.IQG1.NM1T</senha>
            <numero>176</numero>
            <serie>NF-e</serie>
            <valorTotal>4000.00</valorTotal>
            <valorBase>4000.00</valorBase>
            <valorImposto>0.00</valorImposto>
            <valorLiquido>4000.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-20</prestacao>
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
                <documento>10784798000678</documento>
                <nome>ALIANSCE ESTACIONAMENTO LTDA</nome>
                <cep>25085-008</cep>
                <logradouro>Rod. Washington Luiz</logradouro>
                <numero>2895</numero>
                <complemento></complemento>
                <bairro>Parque Duque</bairro>
                <estado>RJ</estado>
                <municipio>Duque de Caxias</municipio>
                <pais>Brasil</pais>
                <email>notafiscal@allos.com</email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Cuidado de 37 �rvores de esp�cies variadas com poda de raleamento, de destopo e de conforma��o. Prioridade para melhoria do monitoramento do CFTV.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>16560.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>16560.00</valor>
                </item>
            </itens>
            <obs>Faturamento: Bradesco Ag. 0795 Cc. 2492-9 Jos� Arthur Rocha Araujo, 
ou PIX 21-97996-9931</obs>
            <deducoes/>
            <senha>2EZH.N7RJ.FBA7.66ZT</senha>
            <numero>177</numero>
            <serie>NF-e</serie>
            <valorTotal>16560.00</valorTotal>
            <valorBase>16560.00</valorBase>
            <valorImposto>510.92</valorImposto>
            <valorLiquido>16560.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-20</prestacao>
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
                <documento>10784798000678</documento>
                <nome>ALIANSCE ESTACIONAMENTO LTDA</nome>
                <cep>25085-008</cep>
                <logradouro>Rod. WASHINGTON LUIZ</logradouro>
                <numero>2895</numero>
                <complemento></complemento>
                <bairro>Parque Duque</bairro>
                <estado>RJ</estado>
                <municipio>Duque de Caxias</municipio>
                <pais>Brasil</pais>
                <email>notafiscal@allos.com</email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>1-Servi�o de supress�o de uma �rvore morta.
Remo��o do material e limpeza do local.
2-Cuidado de cinco �rvores com poda de redu��o de copa lateral de de destopo. Remo��o do material e limpeza do local. 
</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>4800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>4800.00</valor>
                </item>
            </itens>
            <obs>Bradesco Ag. 0795 Cc. 2492-9 Jos� Arthur Rocha Araujo
Ou Pix 21-979969931
</obs>
            <deducoes/>
            <senha>1QCS.BXI9.45I3.LH8M</senha>
            <numero>178</numero>
            <serie>NF-e</serie>
            <valorTotal>4800.00</valorTotal>
            <valorBase>4800.00</valorBase>
            <valorImposto>148.09</valorImposto>
            <valorLiquido>4800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-20</prestacao>
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
                <documento>00059311000207</documento>
                <nome>FUNDA��O NACIONAL DO INDIO</nome>
                <cep>21675-930</cep>
                <logradouro>R. das Palmeiras</logradouro>
                <numero>55</numero>
                <complemento></complemento>
                <bairro>BOTAFOGO</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>Contrato de execu��o de 01 (uma) poda regular de "Manuten��o
Preventiva"</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>19800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>19800.00</valor>
                </item>
            </itens>
            <obs>Bradesco Ag.0795 Cc 2492 dig 9 - Jos� Arthur Rocha Araujo,
Ou Pix 2197996-9931</obs>
            <deducoes/>
            <senha>2MIK.D5W3.D02Z.BIXG</senha>
            <numero>179</numero>
            <serie>NF-e</serie>
            <valorTotal>19800.00</valorTotal>
            <valorBase>19800.00</valorBase>
            <valorImposto>610.88</valorImposto>
            <valorLiquido>19800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-20</prestacao>
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
                <documento>05433183000152</documento>
                <nome>Condom�nio Conde Avelar</nome>
                <cep></cep>
                <logradouro>R. Xavier da Silveira</logradouro>
                <numero>79</numero>
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
                    <descricao>Retirada de galho de arvore pendurado em �rvore de logradouro p�blico.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>600.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>600.00</valor>
                </item>
            </itens>
            <obs>Bradesco Ag. 0795 Cc 2492 dig 9 Jos� Arthur Rocha Araujo</obs>
            <deducoes/>
            <senha>1MSO.CJT1.17IA.NXH2</senha>
            <numero>180</numero>
            <serie>NF-e</serie>
            <valorTotal>600.00</valorTotal>
            <valorBase>600.00</valorBase>
            <valorImposto>18.51</valorImposto>
            <valorLiquido>600.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-27</prestacao>
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
                <documento>04097639000198</documento>
                <nome>CONDOMINIO DO EDIFICIO SANTA LUZIA</nome>
                <cep>22260-070</cep>
                <logradouro></logradouro>
                <numero></numero>
                <complemento></complemento>
                <bairro></bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>SERVI�O DE DESMONTE DE UMA �RVORE TOMABADA PARCIALMENTE COM APOIO DE CAMINH�O MUNK. MAIS SERVI�O DE DESOBISTRU��O DE GALHOS TOMBADOS SOBRE ACESSO AO PR�DIO NO DIA ANTERIOR A EXECU��O DO SERVI�O REALIZADO NO DIA 27 DE MAR�O DE 2024.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>5000.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>5000.00</valor>
                </item>
            </itens>
            <obs>BANCO BRADESCO AG.0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO.
OI PIX 21979969931.</obs>
            <deducoes/>
            <senha>KJ77.ABNU.PYMJ.VQIO</senha>
            <numero>181</numero>
            <serie>NF-e</serie>
            <valorTotal>5000.00</valorTotal>
            <valorBase>5000.00</valorBase>
            <valorImposto>154.26</valorImposto>
            <valorLiquido>5000.00</valorLiquido>
            <dataCancelamento>2024-03-28</dataCancelamento>
            <motivoCancelamento>A nota fiscal deve ser dividida em duas notas.</motivoCancelamento>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-27</prestacao>
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
                <documento>04136329000135</documento>
                <nome>CONDOM�NIO PAULO GUARAN�</nome>
                <cep>22471-080</cep>
                <logradouro>R. Ministro Armando de Alencar</logradouro>
                <numero>40</numero>
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
                    <descricao>Cuidado de Palmeiras conforme fotografias enviadas e poda de ra�zes a�reas de
�rvore no pared�o rochoso.
Remo��o do material e limpeza do local.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1800.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1800.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG. 0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO, OU
PIX 979969931</obs>
            <deducoes/>
            <senha>1JMJ.CAX9.DO8T.BKBT</senha>
            <numero>182</numero>
            <serie>NF-e</serie>
            <valorTotal>1800.00</valorTotal>
            <valorBase>1800.00</valorBase>
            <valorImposto>55.53</valorImposto>
            <valorLiquido>1800.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-27</prestacao>
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
                <documento>40264574000191</documento>
                <nome>CONDOM�NIO DO EDIF�CIO ALPINO</nome>
                <cep>22240-006</cep>
                <logradouro>R. das Laranjeiras</logradouro>
                <numero>430</numero>
                <complemento></complemento>
                <bairro>Laranjeiras</bairro>
                <estado>RJ</estado>
                <municipio>Rio de Janeiro</municipio>
                <pais>Brasil</pais>
                <email></email>
            </tomador>
            <itens>
                <item>
                    <atividade>7.11</atividade>
                    <descricao>LIMPEZA DE TR�S COQUEIROS COM RETIRADA DE COCOS E LIMPEZA DE FRONDES COM LIMPEZA DO LOCAL E REMO��O DO MATERIAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1400.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO
PIX 21979969931</obs>
            <deducoes/>
            <senha>13MU.UQRS.RTUU.MUIS</senha>
            <numero>183</numero>
            <serie>NF-e</serie>
            <valorTotal>1400.00</valorTotal>
            <valorBase>1400.00</valorBase>
            <valorImposto>43.19</valorImposto>
            <valorLiquido>1400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-28</prestacao>
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
                <documento>04097639000198</documento>
                <nome>CONDOMINIO DO EDIFICIO SANTA LUZIA</nome>
                <cep>22260-070</cep>
                <logradouro>Pra�a Radial Sul </logradouro>
                <numero>90</numero>
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
                    <descricao>SERVI�O DE DESMONTE DE UMA �RVORE DA ESP�CIE FLAMBOYANTE PARCIALMENTE TOMBADA ESCORADA EM POSTE DA REDE DE BAIXA TENS�O. REMO��O DO MATERIAL E LIMPEZA DO LOCAL</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>4600.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>4600.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG. 0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO, OU
PIX 21-97996-9931</obs>
            <deducoes/>
            <senha>1TY0.RRBU.LEAX.4045</senha>
            <numero>184</numero>
            <serie>NF-e</serie>
            <valorTotal>4600.00</valorTotal>
            <valorBase>4600.00</valorBase>
            <valorImposto>141.92</valorImposto>
            <valorLiquido>4600.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-28</prestacao>
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
                <documento>04097639000198</documento>
                <nome>CONDOMINIO DO EDIFICIO SANTA LUZIA</nome>
                <cep>22260-070</cep>
                <logradouro>P�a. Radial Sul</logradouro>
                <numero>90</numero>
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
                    <descricao>SERVI�O NO DIA ANTERIOR AO DESMONTE DA �RVORE PARA AVALIA��O T�CNICA DA CONDI��O DO �RVORE, E PICAR  PARTE DA COPA DA MESMA QUE J� HAVIA CAIDO ANTERIORMENTE E IMPEDIA PARCIALMENTE O ACESSO AO PR�DIO.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>400.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>400.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG.0795 CC 2492 DIG 9 - JOS� ARTHUR ROCHA ARAUJO</obs>
            <deducoes/>
            <senha>2JZX.0AAF.S1ED.WW4U</senha>
            <numero>185</numero>
            <serie>NF-e</serie>
            <valorTotal>400.00</valorTotal>
            <valorBase>400.00</valorBase>
            <valorImposto>12.34</valorImposto>
            <valorLiquido>400.00</valorLiquido>
        </nf-e>
        <nf-e>
            <prestacao>2024-03-28</prestacao>
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
                <documento>73560237000109</documento>
                <nome>CONDOMINIO EDIFICIO VILLA GAUY</nome>
                <cep></cep>
                <logradouro>Rua S�o Clemente</logradouro>
                <numero>176</numero>
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
                    <descricao>SERVI�O DE CUIDADO DAS �RVORES DO VILA COM PODAS DE REDU��O DE COPA E LIMPEZA FITOSSANIT�RIA.
REMO��O DO MATERIAL E LIMPEZA DO LOCAL.</descricao>
                    <aliquota>0.0308527100</aliquota>
                    <valorUn>1900.000000</valorUn>
                    <quantidade>1.000000</quantidade>
                    <valor>1900.00</valor>
                </item>
            </itens>
            <obs>BRADESCO AG. 0795 CC 2492 DIG 9 JOS� ARTHUR ROCHA ARAUJO
PIX 21 97996-9931</obs>
            <deducoes/>
            <senha>19E5.XB5B.008Z.1XKU</senha>
            <numero>186</numero>
            <serie>NF-e</serie>
            <valorTotal>1900.00</valorTotal>
            <valorBase>1900.00</valorBase>
            <valorImposto>58.62</valorImposto>
            <valorLiquido>1900.00</valorLiquido>
        </nf-e>
    </emissao>
</GovDigital>
`;
//Parse do xml
const xmlDocument = parse(xmlString)

//Arrays para armazenar os valores
const datas = []
const numeros = []
const valores = []
const clientes = []


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


export { dataFormatada, numeros, valores, clientes }