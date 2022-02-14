# ClassAI - PolyHacks 2022

# Video
[![ClassAI Video Demo](https://github.com/ryan-lam/polyhacks2022/blob/main/logo.png)](https://www.youtube.com/watch?v=_WmUKMGbOM4 "ClassAI Video Demo")



# English
## Inspiration
As students, we struggle with online learning (especially online lectures) because they are often overwhelming and often filled with "fluff" (or technical issues). As a result, we want labels and/or timestamps that tell us the most important parts of a lecture. With AssemblyAI's API and the social challenge, we felt that it was a good opportunity to create something useful that we (and possibly other students) need.

## What it does
ClassAI is a classroom platform where teachers can post video lectures. These video lectures are uploaded to Google's Firebase Cloud Storage, and then processed by both our backend and AssemblyAI's API to pinpoint and summarize the most important parts of the lecture. Once the video is processed, the teacher will be able to see the recommended timestamps and summaries. The teacher will then verify these timestamps/summaries and confirm the upload. The uploaded lecture, its timestamps, and summary can then be seen by students.

We also implemented a class discussion for students to discuss with each other. We also have an amazing UI/UX as well as dark mode (so we can study at 2AM the night before the exam 😆) 

## How we built it
We built the core feature (processing the video with AI) using the following workflow:

Upload video to our backend -> Upload the video from our backend to the cloud and get the public URL -> Pass the URL to AssemblyAI's API to process the video -> Get the resulting data from AssemblyAI's API -> Process/clean the data for the core information we need -> Upload the information and metadata to our Firebase database -> Show the information to the teacher for configuration -> Save teacher's configurations -> Video and timestamps/summaries can now be seen by students

The database design was inspired by tree structures (in CS) and modified so that it worked with "mini-hashtables"

The frontend was built using Vuex and Tailwind CSS to support dark mode. We used lifecycle hooks to ensure that each user had their preferred display mode

## Challenges we ran into
- Working with the AssemblyAI API (couldn't upload local files)
- State management, Tailwind CSS in the frontend
- Designing a tree-like database
- Saving files locally, uploading files to the cloud and creating public file URLs

## Accomplishments that we're proud of
- A completed project with nice UI/UX
- Designing the database and designing the video processing workflow
- State management and dark mode
- Working with the cloud

## What we learned
- Vuex, Firebase Cloud Storage, Tailwind CSS, Working with AssemblyAI's API (all first time using)
- Got better at Vue, Express, Database designing

## What's next for ClassAI
- More features like chat rooms between students and teachers
- More teacher customization on the video uploads
- Allow the teacher to have more control/customization of their class (in general)

# Français (en utilisant google traduction)
## Inspiration
En tant qu'étudiants, nous avons du mal avec l'apprentissage en ligne (en particulier les cours en ligne) car ils sont souvent écrasants et souvent remplis de « peluches » (ou de problèmes techniques). Par conséquent, nous voulons des étiquettes et/ou des horodatages qui nous indiquent les parties les plus importantes d'une conférence. Avec l'API d'AssemblyAI et le défi social, nous avons pensé que c'était une bonne occasion de créer quelque chose d'utile dont nous (et peut-être d'autres étudiants) avons besoin.

## Ce qu'il fait
ClassAI est une plateforme de classe où les enseignants peuvent publier des cours vidéo. Ces conférences vidéo sont téléchargées sur le stockage cloud Firebase de Google, puis traitées à la fois par notre backend et l'API d'AssemblyAI pour identifier et résumer les parties les plus importantes de la conférence. Une fois la vidéo traitée, l'enseignant pourra voir les horodatages et les résumés recommandés. L'enseignant vérifiera ensuite ces horodatages/résumés et confirmera le téléchargement. La session téléchargée, ses horodatages et son résumé peuvent ensuite être vus par les étudiants.

Nous avons également mis en place une discussion en classe pour que les étudiants puissent discuter entre eux. Nous avons également une UI/UX incroyable ainsi qu'un mode sombre (nous pouvons donc étudier à 2h du matin la veille de l'examen 😆)

## Comment nous l'avons construit
Nous avons construit la fonctionnalité principale (traitement de la vidéo avec l'IA) en utilisant le flux de travail suivant:

Téléchargez la vidéo sur notre backend -> Téléchargez la vidéo de notre backend vers le cloud et obtenez l'URL publique -> Transmettez l'URL à l'API de AssemblyAI pour traiter la vidéo -> Obtenez les données résultantes de l'API de AssemblyAI -> Traiter/nettoyer les données pour les informations de base dont nous avons besoin -> Télécharger les informations et les métadonnées dans notre base de données Firebase -> Afficher les informations à l'enseignant pour la configuration -> Enregistrer les configurations de l'enseignant -> La vidéo et les horodatages/résumés peuvent désormais être vus par les étudiants

La conception de la base de données a été inspirée des structures arborescentes (dans CS) et modifiée pour fonctionner avec des "mini-hashtables"

L'interface a été construite à l'aide de CSS Vuex et Tailwind pour prendre en charge le mode sombre. Nous avons utilisé des crochets de cycle de vie pour nous assurer que chaque utilisateur avait son mode d'affichage préféré

## Défis rencontrés
- Travailler avec l'API AssemblyAI (impossible de télécharger des fichiers locaux)
- Gestion des états, Tailwind CSS dans le frontend
- Conception d'une base de données arborescente
- Enregistrement de fichiers localement, téléchargement de fichiers sur le cloud et création d'URL de fichiers publics

## Réalisations dont nous sommes fiers
- Un projet terminé avec une belle UI/UX
- Conception de la base de données et conception du workflow de traitement vidéo
- Gestion d'état et mode sombre
- Travailler avec le cloud

## Ce que nous avons appris
- Vuex, Firebase Cloud Storage, Tailwind CSS, Utilisation de l'API AssemblyAI (toutes les premières utilisations)
- Amélioré à Vue, Express, Conception de bases de données

## Quelle est la prochaine étape pour ClassAI
- Plus de fonctionnalités comme les salons de discussion entre étudiants et enseignants
- Plus de personnalisation des enseignants sur les téléchargements de vidéos
- Permettre à l'enseignant d'avoir plus de contrôle/personnalisation de sa classe (en général)
