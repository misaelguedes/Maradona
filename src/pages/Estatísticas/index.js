import './Estatísticas.css'

export default function Estatísticas() {
    return (
        <article>
            <h1 className="titulos">Como Jogador</h1>
            <div id="tb1">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">Clube</th>
                            <th scope="col">Jogos</th>
                            <th scope="col">Gols</th>
                            <th scope="col">Assistências</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="rowgroup">Argentinos Juniors</th>
                            <td>166</td>
                            <td>116</td>
                            <td>65</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Boca Juniors</th>
                            <td>71</td>
                            <td>35</td>
                            <td>27</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Barcelona</th>
                            <td>58</td>
                            <td>38</td>
                            <td>24</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Napoli</th>
                            <td>259</td>
                            <td>115</td>
                            <td>77</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Sevilla</th>
                            <td>29</td>
                            <td>8</td>
                            <td>13</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Newell's Old Boys</th>
                            <td>5</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Seleção Argentina Sub-20</th>
                            <td>25</td>
                            <td>14</td>
                            <td>22</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Seleção Principal</th>
                            <td>91</td>
                            <td>34</td>
                            <td>29</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="rowgroup">Total</th>
                            <td className="total">704</td>
                            <td className="total">360</td>
                            <td className="total">258</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <h1 className="titulos">Como Treinador</h1>
            <div id="tb2">
                <table>
                    <thead>
                        <tr>
                            <th rowspan="2" scope="col">Clube</th>
                            <th rowspan="2" scope="col">Período</th>
                            <th colspan="5" scope="colgroup">Dados Estatísticos</th>
                        </tr>
                        <tr>
                            <th scope="col">J</th>
                            <th scope="col">V</th>
                            <th scope="col">E</th>
                            <th scope="col">D</th>
                            <th scope="col">%</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="rowgroup">Textil Mandiyú</th>
                            <td>Janeiro de 1994 à Junho de 1994</td>
                            <td>12</td>
                            <td>1</td>
                            <td>6</td>
                            <td>5</td>
                            <td>25%</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Racing</th>
                            <td>Maio de 1995 à Novembro de 1995</td>
                            <td>11</td>
                            <td>2</td>
                            <td>6</td>
                            <td>3</td>
                            <td>36,36%</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Seleção Argentina</th>
                            <td>Novembro de 2008 à Julho de 2010</td>
                            <td>24</td>
                            <td>18</td>
                            <td>0</td>
                            <td>6</td>
                            <td>75%</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Al Wasl</th>
                            <td>Maio de 2011 à Julho de 2012</td>
                            <td>23</td>
                            <td>11</td>
                            <td>3</td>
                            <td>9</td>
                            <td>52,18%</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Al-Fujairah</th>
                            <td>Abril de 2017 à Abril de 2018</td>
                            <td>11</td>
                            <td>7</td>
                            <td>3</td>
                            <td>1</td>
                            <td>72,73%</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Dorados de Sinaloa</th>
                            <td>Setembro de 2018 à Junho de 2019</td>
                            <td>38</td>
                            <td>20</td>
                            <td>9</td>
                            <td>9</td>
                            <td>60,52%</td>
                        </tr>
                        <tr>
                            <th scope="rowgroup">Gimnasia de La Plata</th>
                            <td>Setembro de 2019 à Novembro de 2020</td>
                            <td>21</td>
                            <td>8</td>
                            <td>4</td>
                            <td>9</td>
                            <td>44,45%</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colspan="2" scope="rowgroup">Total</th>
                            <td className="total">140</td>
                            <td className="total">67</td>
                            <td className="total">31</td>
                            <td className="total">42</td>
                            <td className="total">55,24%</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </article>
    )
}