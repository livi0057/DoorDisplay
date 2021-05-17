/**
******************************************************************************
@brief sensfuncs, header for sensfuncs.c
@file sensfuncs.h
@author Oliver Gortzak
@version 1.0
@date 10-December-2020
******************************************************************************
*/

#ifndef INC_SENSFUNCS_H_
#define INC_SENSFUNCS_H_

#ifndef _MAIN_H
#include "main.h"
#endif

#ifndef _STDINT_H
#include "stdint.h"
#endif

void screeninit(void);
void screenupdate(void);
void screenshift(void);
void buffer(char* );
void pwmod(uint8_t);

#endif /* INC_SENSFUNCS_H_ */