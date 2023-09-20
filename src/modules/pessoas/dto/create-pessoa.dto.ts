export class CreatePessoaDto {
    readonly nome: string
    readonly email: string
    readonly tel: string
    readonly nascimento: string
    readonly nasceuLarCritao: boolean
    readonly batizadoEspirito: boolean
    readonly batizadoNaAgua: boolean
    readonly endereco: string
    readonly bairro: string
    readonly cep: string
    readonly cidade: string
    readonly uf: string
    readonly escolaridade?: string
    readonly pai?: string
    readonly mae: string
    readonly cpf: string
    readonly profissao?: string
    readonly observacao?: string
}




