export type TUser = {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    avatarUrl?: string;
    jobTitle?: string;
    bio?: string;
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    phone?: string;
    website?: string;
    twitter?: string;
    facebook?: string;
    linkedIn?: string;
    instagram?: string;
    github?: string;
    youtube?: string;
    dateJoined?: string;
    dateLastActive?: string;
    society?: string;
    xp?: number;
    isFreelancer?: boolean;
    posts?: string[];
    comments?: string[];
    reactions?: TReaction[];
    experience?: TExperience[];
    education?: TEducation[];
    projects?: TProject[];
    awards?: TAward[];
    certifications?: TCertification[];
    skills?: TSkill[];
    languages?: TLanguage[];
    interests?: TInterest[];
    references?: TReference[];
}

export type TReaction = {
    id?: string;
    postId?: string;
    commentId?: string;
    userId?: string;
    reaction?: string;
}

export type TExperience = {
    id?: string;
    title?: string;
    company?: string;
    location?: string;
    from?: string;
    to?: string;
    current?: boolean;
    description?: string;
}

export type TEducation = {
    id?: string;
    school?: string;
    degree?: string;
    fieldOfStudy?: string;
    from?: string;
    to?: string;
    current?: boolean;
    description?: string;
}

export type TProject = {
    id?: string;
    title?: string;
    company?: string;
    location?: string;
    from?: string;
    to?: string;
    current?: boolean;
    description?: string;
    url?: string;
}

export type TAward = {
    id?: string;
    title?: string;
    date?: string;
    description?: string;
    url?: string;
}

export type TCertification = {
    id?: string;
    title?: string;
    date?: string;
    description?: string;
    url?: string;
}

export type TSkill = {
    id?: string;
    name?: string;
    level?: string;
}

export type TLanguage = {
    id?: string;
    name?: string;
    level?: string;
}

export type TInterest = {
    id?: string;
    name?: string;
    description?: string;
}


export type TReference = {
    id?: string;
    name?: string;
    relationship?: string;
    email?: string;
    phone?: string;
}