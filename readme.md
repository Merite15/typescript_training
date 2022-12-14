# Tutorial source

https://www.typescripttutorial.net/typescript-tutorial/typescript-hello-

https://devstory.net/13113/typescript

# install le compiler

npm install -g typescript
tsc --v
npm install -g ts-node

# Pour pouvoir générer un fichier js a partir du typescript on utilise

npx tsc index.ts

# Pour pouvoir lire ce qui se trouve dans le fichier ts on lance

npx ts-node index.ts
node index.js

# Pour effectuer des modifications on modifie le fichier typescript puis on compile

Notez que le app.js est le fichier de sortie du app.ts par conséquent, vous ne devez jamais modifier directement le code dans ce fichier, sinon vous perdrez les modifications une fois que vous aurez recompilé le app.ts dossier.

# Problème de typage

Pour pouvoir voir le type du variable en js on utilise le typeOf()

Comme vous pouvez le voir, dès que la valeur est affectée, le type de la variable change.

Et vous n'avez pas besoin d'indiquer explicitement le type à JavaScript. JavaScript déduira automatiquement le type de la valeur.

Les types dynamiques offrent de la flexibilité. Cependant, ils entraînent également des problèmes.

Faire référence à une propriété qui n'existe pas sur l'objet est un problème courant lorsque vous travaillez en JavaScript.

# Les types

# Typage en typescript

On ne peut affecter une propriété qui n'existe pas a une fonction

Et quand vous passez les arguments des mauvais types a une fonction, vous recevrez une erreur

# Types en typescript

Dans TypeScript, un type est un moyen pratique de faire référence aux différentes propriétés et fonctions d'une valeur .

Une valeur est tout ce que vous pouvez affecter à une variable, par exemple un nombre, une chaîne, un tableau, un objet et une fonction.

TypeScript hérite des types intégrés de JavaScript. Les types TypeScript sont classés en :

- Types primitifs
- Type d'objet

1. Types primitifs

Voici une illustration des types primitifs dans TypeScript :
A. Nom : La description
B. string : représente des données textuelles
C. number : représente des valeurs numériques
D. boolean : a des valeurs vraies et fausses
E. null a une valeur : null
F. undefined a une valeur : undefined. C'est une valeur par défaut d'une variable non initialisée
G. symbol : représente une valeur constante unique

2. Type d'objet

Les types d'objets sont des fonctions, des tableaux, des classes, etc. Plus tard, vous apprendrez à créer des types d'objets personnalisés.

Les types ont deux objectifs principaux dans TypeScript :

1. Tout d'abord, les types sont utilisés par le compilateur TypeScript pour analyser votre code à la recherche d'erreurs

2. Deuxièmement, les types vous permettent de comprendre quelles valeurs sont associées aux variables.

Si vous essayez d'accéder à une propriété ou à une méthode qui n'existe pas, le compilateur TypeScript affichera une erreur

# Annotations en typescript

TypeScript utilise des annotations de type pour spécifier explicitement les types d'identificateurs tels que les variables, les fonctions, les objets, etc.

TypeScript utilise la syntaxe : type après un identifiant comme annotation de type, où type peut être n'importe quel type valide.

Une fois qu'un identifiant est annoté avec un type, il ne peut être utilisé que comme ce type. Si l'identifiant est utilisé comme un type différent, le compilateur TypeScript émettra une erreur.

-> let counter: number;
Dans cette syntaxe, l'annotation de type vient après le nom de la variable ou de la constante et est précédée de deux-points ( :).

Vous pouvez à la fois utiliser une annotation de type pour une variable et l'initialiser dans une seule instruction comme celle-ci :

-> let counter: number = 1;

Pour annoter un type de tableau que vous utilisez, utilisez un type spécifique suivi d'un crochet : type[] :

Pour spécifier un type pour un objet, vous utilisez l'annotation de type d'objet.

# Inférence de type TypeScript

Cependant, si vous initialisez une variable à un nombre, TypeScript déduira le type est number.

TypeScript utilise le meilleur algorithme de type commun pour sélectionner les meilleurs types candidats compatibles avec toutes les variables.

TypeScript utilise également le typage contextuel pour déduire les types de variables en fonction des emplacements des variables.

En pratique, vous devez toujours utiliser l'inférence de type autant que possible. Et vous utilisez l'annotation de type dans les cas suivants :

A. Lorsque vous déclarez une variable et que vous lui affectez une valeur ultérieurement.
B. Lorsque vous voulez une variable qui ne peut pas être déduite.
C. Lorsqu'une fonction retourne le any type et vous devez clarifier la valeur.

# Type number

Tous les nombres dans TypeScript sont soit des valeurs à virgule flottante qui obtiennent le type de nombre, soit de grands entiers qui obtiennent le bigint type.

Évitez autant que possible d'utiliser le type number.

# Type string

Comme JavaScript, TypeScript utilise des guillemets doubles ( ") ou des guillemets simples ( ') pour entourer les littéraux de chaîne :

TypeScript prend également en charge les chaînes de modèle qui utilisent le backtick (`) pour entourer les caractères.

Les chaînes de modèle vous permettent de créer des chaînes multi lignes et de fournir les fonctionnalités d'interpolation de chaîne.

# Type boolean

Il autorise deux valeurs : true et false. C'est l'un des types primitifs de TypeScript.

JavaScript a le Boolean type qui fait référence à l'objet boxé non primitif

# Type d'objet

Il représente toutes les valeurs qui ne sont pas dans les types primitifs.

Voici les types primitifs dans TypeScript :
1.number
2.bigint
3.string
4.boolean
5.null
6.undefined
7.symbol

Si on réaffecte une valeur primitive a un objet, vous obtiendrez une erreur

L'objet est un type avec une liste fixe de propriétés. Si vous tentez d'accéder à une propriété qui n'existe pas sur le objet, on obtient une erreur

On peut specifier les propriétés appartenant en les declarant comme suit

let employee: {
firstName: string;
lastName: string;
age: number;
jobTitle: string;
};

# Typescript Object

TypeScript a un autre type appelé Object avec la lettre O en majuscule. Il est important de comprendre les différences entre eux.

La object type représente toutes les valeurs non primitives tandis que le Object type décrit la fonctionnalité de tous les objets.

Par exemple, le Object type a le toString() et valueOf() méthodes accessibles par n'importe quel objet.

# Type vide

TypeScript a un autre type appelé type vide désigné par {}, qui est assez similaire au type d'objet.

Le type vide {} décrit un objet qui n'a pas de propriété en soi. Si vous essayez d'accéder à une propriété sur un tel objet, TypeScript émettra une erreur de compilation

# Type Array

# Type tuple

Un tuple fonctionne comme un tableau avec quelques considérations supplémentaires :

1.Le nombre d'éléments dans le tuple est fixe.
2.Les types d'éléments sont connus et n'ont pas besoin d'être les mêmes.

L'ordre des valeurs dans un tuple est important. Si vous modifiez l'ordre des valeurs des valuers on obtient une erreur

Pour cette raison, il est recommandé d'utiliser des tuples avec des données liées les unes aux autres dans un ordre spécifique.

Par exemple, vous pouvez utiliser un tuple pour définir une couleur RVB qui se présente toujours sous la forme d'un motif à trois chiffres :

-> let color: [number, number, number] = [255, 0, 0];

Depuis TypeScript 3.0, un tuple peut avoir des éléments facultatifs spécifiés à l'aide du suffixe point d'interrogation (?).

```bash
let bgColor, headerColor: [number, number, number, number?];
```

Un tuple est un tableau avec un nombre fixe d'éléments dont les types sont connus.

# Type Enum

Une énumération est un groupe de valeurs constantes nommées. Enum signifie type énuméré.

Pour définir une énumération, procédez comme suit :

. Tout d'abord, utilisez le enum mot-clé suivi du nom de l'énumération.
. Ensuite, définissez des valeurs constantes pour l'énumération.

Comme vous pouvez le voir clairement à partir de la sortie, une énumération TypeScript est un objet en JavaScript. Cet objet a des propriétés nommées déclarées dans l'énumération.

L'objet généré possède également des clés numériques avec des valeurs de chaîne représentant les constantes nommées.

C'est pourquoi vous pouvez passer un nombre dans la fonction qui accepte une énumération. En d'autres termes, un membre enum est à la fois un nombre et une constante définie.

Il est possible de spécifier explicitement des nombres pour les membres d'une énumération

Vous devez utiliser une énumération lorsque vous :

. Avoir un petit ensemble de valeurs fixes qui sont étroitement liées
. Et ces valeurs sont connues au moment de la compilation.

# Type any

Il permet d'affecter une valeur de n'importe quel type à une variable

Il permet aussi de travailler avec la base de code JavaScript existante. Il vous permet d'activer et de désactiver progressivement la vérification de type lors de la compilation. Par conséquent, vous pouvez utiliser le any type pour migrer un projet JavaScript vers TypeScript.

Si on déclare une variable sans spécifier de type, TypeScript suppose que vous utilisez le any type. Cette fonctionnalité est appelée inférence de type . Fondamentalement, TypeScript devine le type de la variable.

```
Notez que pour désactiver le typage implicite dans le any type, vous modifiez le noImplicitAny possibilité dans le tsconfig.json fichier à vrai.
```

# Type void

Il dénote l'absence de tout type. C'est un peu le contraire de any type .

En règle générale, vous utilisez le void type comme type de retour des fonctions qui ne retournent pas de valeur

C'est une bonne pratique d'ajouter le void type comme type de retour d'une fonction ou d'une méthode qui ne retourne aucune valeur. En faisant cela, vous pouvez bénéficier des avantages suivants :

. Améliorez la clarté du code : vous n'avez pas à lire tout le corps de la fonction pour voir si elle renvoie quelque chose.
. Assurez-vous que le type est sûr : vous n'assignerez jamais la fonction avec le void type de retour à une variable.

# Never type

C'est un type qui ne contient aucune valeur. Pour cette raison, vous ne pouvez pas affecter de valeur à une variable avec un never type.

En règle générale, vous utilisez le never type pour représenter le type de retour d'une fonction qui génère toujours une erreur

Il représente le type de retour d'une fonction qui renvoie toujours une erreur ou d'une fonction qui contient une boucle indéfinie.

# Type d'union

Le type d'union vous permet de combiner plusieurs types en un seul type.

```
let result: number | string;
```

Un type d'union décrit une valeur qui peut être l'un de plusieurs types, pas seulement deux

# Alias type

Les alias de type vous permettent de créer un nouveau nom pour un type existant

Il est utile de créer des alias de type pour les types d'union

## Les fonctions

Contrairement à JavaScript, TypeScript vous permet d'utiliser des annotations de type dans les paramètres et la valeur de retour d'une fonction.

```
function name(parameter: type, parameter:type,...): returnType {
   // do something
}

function add(a: number, b: number): number {
    return a + b;
}
```

Les types des paramètres de fonction sont également disponibles dans le corps de la fonction pour la vérification de type.

Lorsqu'une fonction a un type de retour, le compilateur TypeScript vérifie chaque return contre le type de retour pour s'assurer que la valeur de retour est compatible avec celui-ci.

Lorsque vous n'annotez pas le type de retour, TypeScript essaiera de déduire un type approprié.

Cependant, si une fonction a différentes branches qui renvoient différents types, le compilateur TypeScript peut déduire le union type ou any type.

Par conséquent, il est important d'ajouter autant que possible des annotations de type à une fonction.

# Types de fonctions

Un type de fonction comporte deux parties : les paramètres et le type de retour. Lors de la déclaration d'un type de fonction, vous devez spécifier les deux parties avec la syntaxe suivante :

```
let add: (x: number, y: number) => number;
```

De plus, vous pouvez déclarer une variable et affecter une fonction à une variable comme ceci :

```
let add: (a: number, b: number) => number =
    function (x: number, y: number) {
        return x + y;
    };
```

Le compilateur TypeScript peut déterminer le type de fonction lorsque vous avez le type d'un côté de l'équation. Cette forme d' inférence de type est appelée typage contextuel

# Paramètres facultatifs

Dans TypeScript, le compilateur vérifie chaque appel de fonction et génère une erreur dans les cas suivants :

. Le nombre d'arguments est différent du nombre de paramètres spécifiés dans la fonction.
. Soit les types d'arguments ne sont pas compatibles avec les types de paramètres de fonction.

Pour rendre un paramètre de fonction facultatif, vous utilisez la ?après le nom du paramètre. Par exemple:

```
function multiply(a: number, b: number, c?: number): number {

    if (typeof c !== 'undefined') {
        return a * b * c;
    }
    return a * b;
}

Comment ça fonctionne:

.Tout d'abord, utilisez le ?après le c paramètre.
.Deuxièmement, vérifiez si l'argument est passé à la fonction en utilisant l'expression typeof c !== 'undefined'.
```

````
Les paramètres facultatifs doivent apparaître après les paramètres obligatoires dans la liste des paramètres. 
````

# Paramètres par défaut

````
function applyDiscount(price: number, discount: number = 0.05): number {
    return price * (1 - discount);
}

console.log(applyDiscount(100));
````

Comme les paramètres facultatifs , les paramètres par défaut sont également facultatifs. Cela signifie que vous pouvez omettre les paramètres par défaut lors de l'appel de la fonction. 

Les paramètres facultatifs doivent venir après les paramètres obligatoires. Cependant, les paramètres par défaut n'ont pas besoin d'apparaître après les paramètres requis. 

Lorsqu'un paramètre par défaut apparaît avant un paramètre requis, vous devez passer explicitement undefinedpour obtenir la valeur initialisée par défaut. 

````
Utiliser la syntaxe de paramètre par défaut parameter:=defaultValue si vous souhaitez définir la valeur initialisée par défaut pour le paramètre. 

Notez que vous ne pouvez pas inclure de paramètres par défaut dans les définitions de type de fonction
````

# Paramètres de repos
Un paramètre rest permet à une fonction d'accepter zéro ou plusieurs arguments du type spécifié. Dans TypeScript, les paramètres de repos suivent ces règles :

. Une fonction n'a qu'un seul paramètre de repos.
. Le paramètre reste apparaît en dernier dans la liste des paramètres.
. Le type du paramètre rest est un type tableau . 

Pour déclarer un paramètre rest, vous préfixez le nom du paramètre avec trois points et utilisez le type de tableau comme annotation de type : 

````
function getTotal(...numbers: number[]): number {
    let total = 0;
    numbers.forEach((num) => total += num);
    return total;
}
````

### Les classes

#### Les interfaces
